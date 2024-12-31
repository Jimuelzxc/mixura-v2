import { useState, useRef, useEffect } from "react";
export const useToggleClickOutside = (initialValue) => {
  const [toggle, setToggle] = useState(initialValue);
  const ref = useRef();
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setToggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return { toggle, setToggle, ref };
};
