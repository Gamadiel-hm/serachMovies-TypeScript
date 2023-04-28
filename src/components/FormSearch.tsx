import useInput from '../hooks/useInput';
import useStore from '../store/store';

function FormSearch() {
  const { inputState, handleChange, error } = useInput();

  const [search, updateSearch] = useStore(state => [
    state.search,
    state.updateFirstName
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData: FormData = new FormData(e.currentTarget);
    updateSearch(String(formData.get('search')));
  };

  return (
    <form
      className='form-search'
      onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='Write movie'
          onChange={handleChange}
          value={inputState}
          name='search'
        />
        <button type='submit'>Search</button>
      </div>
      {error && <label>Error: {error ?? ''}</label>}
    </form>
  );
}

export default FormSearch;
