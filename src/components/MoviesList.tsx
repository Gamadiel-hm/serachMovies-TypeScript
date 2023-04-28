import { useEffect } from 'react';
import usefetching from '../hooks/useFetching';
import useStore from '../store/store';

function MoviesList() {
  const { data, searchMovies } = usefetching();
  const [search] = useStore(state => [state.search]);

  useEffect(() => {
    searchMovies(search);
  }, [search]);

  return (
    <>
      <ul className='movies'>
        {data?.Response === 'False' && 'Search Movies'}
        {data?.Response === 'True' &&
          data?.Search.map(movies => (
            <li
              key={movies.imdbID}
              className='movi'>
              <h4>{movies.Title}</h4>
              <p>{movies.Year}</p>
              <img
                src={movies.Poster}
                alt={movies.Title}
              />
            </li>
          ))}
      </ul>
    </>
  );
}

export default MoviesList;
