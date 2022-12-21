import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import MovieCover from "./MovieCover";
import "../App.css";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  if (movies.Response === "True") {
    renderMovies = movies.Search.map((movie, index) => {
      return <MovieCover key={index} data={movie} />;
    });
  }

  return (
    <div className="ui fluid container ">
      <div className="ui five column doubling stackable grid">
        {renderMovies}
      </div>
    </div>
  );
};

export default MovieList;
