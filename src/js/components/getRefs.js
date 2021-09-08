export default function getRefs() {
  return {
    cardContainer: document.querySelector('.js-card__container'),
    inputRef: document.querySelector('.js__input'),
    renderCountryList: document.querySelector('.country-list'),
    clear: document.querySelector('[data-clear-list]'),
  };
}
