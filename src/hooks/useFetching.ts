import { useEffect, useState } from 'react';
import { Movies } from '../types/moviesInterface';
const API_URL = 'https://www.omdbapi.com/?apikey=34471800&s=marvel';

function useFetching() {
  const [data, setData] = useState<Movies>();

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return { data };
}

export default useFetching;
