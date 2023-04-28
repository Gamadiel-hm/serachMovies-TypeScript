const API_URL = 'https://www.omdbapi.com/?apikey=34471800&s=';

function searchFetch() {
  const fetching = (search: string) => fetch(API_URL + search);

  return { fetching };
}

export default searchFetch;
