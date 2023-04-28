import { useEffect, useRef, useState } from 'react';

function useInput() {
  const [inputState, setInputState] = useState<string>('');
  const [error, setError] = useState<string>('');
  const firstSearch = useRef<boolean>(true);

  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = inputState === '';
    }

    if (inputState.startsWith(' ')) return setInputState('');

    if (inputState.match(/^\d+$/)) {
      setError('Can`t search with numbers');
      setInputState('');
      return;
    }

    if (inputState.length < 4 && !firstSearch.current)
      return setError('Min charadter four letters');

    setError('');
  }, [inputState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
  };

  return { inputState, handleChange, error };
}

export default useInput;
