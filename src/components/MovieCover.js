import "../App.css";

import { Link } from "react-router-dom";
import React from "react";

const MovieCover = ({ data }) => {

  return (
    <div className="column column-top">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="ui link cards" >
          <div className="card" >
            <div className="image"  >
              <img src={data.Poster} alt="movie-cover" className="card-img"/>
            </div>
            <div className="content">
              <div className="left aligned header">{data.Title}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCover;
