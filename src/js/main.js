import '@pnotify/core/dist/BrightTheme.css';
import templates from '../templates/containerTpl.hbs';
import { error } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import refs from './partials/refs';
import fetchCountries from './partials/fetchCountries';
import createMarkupList from './partials/markup';
let debounce = require('lodash.debounce');

refs.form.addEventListener('input', debounce(onSearch, 500));
refs.btn.addEventListener('click', onClickClear);


function onSearch(e) {
    e.preventDefault();
    const search = refs.input.value;

    fetchCountries(search)
    .then(checkThen)
    .catch(() => {
        checkCatch(search);
    });
}

function checkThen(arr) {
    if (arr.length > 10) {
        error({
            text: 'Введите страну правильно',
            maxTextHeight: null,
            delay: 1000,
        });
    } else if (arr.length > 2 && arr.length <= 10) {
        appendMarkupList(arr);
        refs.list.classList.add('is-open');
    } else if (arr.length === 1) {
        refs.list.innerHTML = '';
        refs.list.classList.remove('is-open');
        appendMarkupContainer(arr)
    }
}

function checkCatch(search) {
    if (search === '') {
        refs.list.classList.remove('is-open');
        refs.list.innerHTML = '';
    }
}

function appendMarkupList(arr) {
    refs.list.innerHTML = createMarkupList(arr).join('');
}

function appendMarkupContainer(arr) {
    refs.container.innerHTML = templates(arr);
}

function onClickClear() {
    refs.container.innerHTML = '';
    refs.input.value = '';
    refs.list.innerHTML = '';
    refs.list.classList.remove('is-open');
}