import useInput from '../hooks/useInput';

function FormSearch() {
  const { inputState, handleChange, error } = useInput();
  return (
    <form className='form-search'>
      <div>
        <input
          type='text'
          placeholder='Write movie'
          onChange={handleChange}
          value={inputState}
        />
        <button type='submit'>Search</button>
      </div>
      {error && <label>Error: {error ?? ''}</label>}
    </form>
  );
}

export default FormSearch;
