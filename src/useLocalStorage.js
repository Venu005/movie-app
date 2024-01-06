import { useState } from "react";
import { useEffect } from "react";
export function useLocalStorage(initalState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage?.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initalState;
  });
  useEffect(() => {
    localStorage?.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}