import { useCallback, useRef, useState } from 'react';
import { Movies } from '../types/moviesInterface';
import useFetch from '../services/seacrhFetch';

function useFetching() {
  const [data, setData] = useState<Movies>();
  const { fetching } = useFetch();
  const previusSearch = useRef<string>('');

  const searchMovies = useCallback(
    (search: string) => {
      if (previusSearch.current === search) return;
      fetching(search)
        .then(res => res.json())
        .then(data => setData(data));
    },
    [fetching]
  );

  return { data, searchMovies };
}

export default useFetching;
