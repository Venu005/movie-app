import { useState, useEffect } from "react";
const KEY = `cd1ceb6a`;
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setError] = useState("");
  useEffect(
    function () {
    
      const controller = new AbortController();
      (async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error(`Something went wrong while fetching data😿`);
          const data = await res.json();

          if (data.Response === "False") throw new Error("Movie not found");
          setMovies(data.Search);
          setError("");

          //console.log(movies);
        } catch (err) {
          console.log(err.message);
          if (err.name !== "AbortError") {
            setError(err.message);
          }
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
        if (query.length < 3) {
          setMovies([]);
          setError("");
          return;
        }
        //handleCloseMovie();
      })();
      return function () {
        controller.abort();
      };

      // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=salaar`)
      //   .then((res) => res.json())
      //   .then((data) => setMovies(data.Search));
    },
    [query]
  );
  //returning
  return { movies, isLoading, err };
}
