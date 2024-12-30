import { useState, useRef, useEffect } from "react";
export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef();
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    inputRef.current.focus()
  }, [value]);

  return { value, setValue, inputRef, handleOnChange };
};
