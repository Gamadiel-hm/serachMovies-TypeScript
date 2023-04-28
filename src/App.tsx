import './App.css';
import FormSearch from './components/FormSearch';
import usefetching from './hooks/useFetching';

function App() {
  const { data } = usefetching();
  return (
    <>
      <header>
        <h2>Search movies</h2>
        <FormSearch />
      </header>

      <main className='movies-container'>
        <ul className='movies'>
          {data?.Search.map(movies => (
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
      </main>
    </>
  );
}

export default App;
