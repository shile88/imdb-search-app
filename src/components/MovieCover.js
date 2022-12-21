import React from "react";
import { Link } from "react-router-dom";

const MovieCover = ({ data }) => {
  return (
    <div className="column">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={data.Poster} alt="movie-cover" />
            </div>
            <div className="content">
              <div className="ui large header">{data.Title}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCover;
