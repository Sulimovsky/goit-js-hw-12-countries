export default class CountryApiService {
  constructor() {
    this.searchQuery = '';
  }

  async fetchCountries(searchQuery) {
    return await fetch(
      `https://restcountries.eu/rest/v2/name/${searchQuery}`,
    ).then(response => {
      return response.json();
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
