export default function fetchCountries(name) {
  const KEY = 'b2c3269bd358b01baf914c84972bca6a';
  const BASE_URL = 'https://api.themoviedb.org/3/search/movie?';
  return fetch(
    `${BASE_URL}api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${name}`,
  ).then(response => response.json());
}
 