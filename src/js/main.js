import getRefs from './components/getRefs';
import CountryApiService from './components/fetchCountries';
import myError from './components/Pnotify';
import countryCardTmp from '../templates/country.hbs';
import countryList from '../templates/countryList.hbs';
import debounce from 'lodash.debounce';

const refs = getRefs();
const fetchCountryByName = new CountryApiService();

refs.inputRef.addEventListener('input', debounce(onSearch, 500));
refs.clear.addEventListener('click', clearList);

function onSearch() {
  const inputText = refs.inputRef.value;
  fetchCountryByName
    .fetchCountries(inputText)
    .then(propertyQuery)
    .catch(myError);
}

function renderCountryList(country) {
  const markup = countryList(country);
  refs.renderCountryList.innerHTML = markup;
}

function renderCountryCard(country) {
  const markup = countryCardTmp(country);
  refs.cardContainer.innerHTML = markup;
}
function propertyQuery(r) {
  if (r === false) {
    return;
  }
  if (r.length > 10) {
    myError();
  }
  if (r.length <= 10 && r.length >= 2) {
    renderCountryList(r);
  }
  if (r.length === 1) {
    renderCountryCard(r);
    renderCountryList('');
  }
}

function clearList() {
  refs.renderCountryList.innerHTML = '';
  refs.cardContainer.innerHTML = '';
  refs.inputRef.value = '';
}
