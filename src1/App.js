import { useState } from "react";
import Main from "./Main";
import { Nav, Results } from "./Nav";
import { tempMovieData } from "./tempMovieData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <>
      <Nav>
        <Results movies={movies} />{" "}
      </Nav>
      <Main movies={movies} setMovies={setMovies} />
    </>
  );
}
