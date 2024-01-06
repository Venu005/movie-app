import React from "react";
import { useState } from "react";
import average from "./Average";
import { tempMovieData } from "./tempMovieData";
import { tempWatchedData } from "./tempWatchedData";
export default function Main({ movies, setMovies }) {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <main className="main">
      <ListBox movies={movies} isOpen1={isOpen1} setIsOpen1={setIsOpen1} />
      <Watched />
    </main>
  );
}
function Button({ isOpen, setIsOpen }) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {isOpen ? "–" : "+"}
    </button>
  );
}
function Movie({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <ListMovies key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}
function ListBox({ isOpen1, movies, setIsOpen1 }) {
  return (
    <div className="box">
      <Button isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {isOpen1 && <Movie movies={movies} />}
    </div>
  );
}

function ListMovies({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
function Summary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
function WatchedMoviesList({ movie }) {
  return (
    <li key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}

function ToMapWatched({ watched }) {
  return (
    <>
      <Summary watched={watched} />
      <ul className="list">
        {watched.map((movie) => (
          <WatchedMoviesList key={movie.imdbID} movie={movie} />
        ))}
      </ul>
    </>
  );
}
function Watched() {
  const [watched, setWatched] = useState(tempWatchedData);

  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <Button isOpen={isOpen2} setIsOpen={setIsOpen2} />
      {isOpen2 && <ToMapWatched watched={watched} />}
    </div>
  );
}
