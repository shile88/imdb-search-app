import "../App.css";

import MovieCover from "./MovieCover";
import React from "react";
import { getAllMovies } from "../features/movies/movieSlice";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector(getAllMovies);
 
  return (
    <>
      {movies.Response === "True" && (
        <div className="ui fluid container ">
          <div className="ui five column doubling stackable grid" >
            <div className="equal height row" >
              {movies.Search.map((movie, index) => {
                return <MovieCover key={index} data={movie} />;
              })}
            </div>
          </div>
        </div>
      )}
      {movies.Response === "False" && (
        <div className="ui center aligned container" style={{marginTop: '50px'}}>
        <div className="ui massive error message">
          <div className="content">
            <div className="header">Error with your search</div>
            <div>{movies.Error}</div>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
