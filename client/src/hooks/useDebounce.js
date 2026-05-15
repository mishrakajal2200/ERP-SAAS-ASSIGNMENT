// src/hooks/useDebounce.js

import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debounced;
};

export default useDebounce;