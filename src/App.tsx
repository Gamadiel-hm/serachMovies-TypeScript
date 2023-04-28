import './App.css';
import FormSearch from './components/FormSearch';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <>
      <header>
        <h2>Search movies</h2>
        <FormSearch />
      </header>

      <main className='movies-container'>
        <MoviesList />
      </main>
    </>
  );
}

export default App;
