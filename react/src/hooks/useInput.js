import { useCallback, useState } from 'react';

export default function useInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const onChange = useCallback((e) => {
    const { value } = e.target;

    setValue(value);
  }, []);
  const reset = useCallback(() => setValue(''), []);

  return {
    value,
    onChange,
    reset,
  };
}