import React, { useEffect } from "react";
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import MovieCover from "./MovieCover";
import MovieDetails from "./MovieDetails";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const DetailsScreen = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovie);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      <Header />
      {Object.keys(data).length === 0 ? (
        <div className="ui center aligned container" style={{marginTop: '50px'}}>
        <div className="ui massive icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">Just one second</div>
            <p>We're fetching that content for you.</p>
          </div>
        </div>
        </div>
      ) : (
        <div className="ui fluid container">
          <div className="ui container">
            <div className="ui stackable grid">
              <div className="four wide column" style={{marginTop: '-20px'}}>
                <MovieCover data={data} />
              </div>
              <div className="twelve wide column">
                <MovieDetails data={data} />
              </div>
            </div>
          </div>

          <h1 className="similar-movies">More movies like this:</h1>
          <div className="ui grid">
            <div className="ui row">
              <MovieList />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsScreen;
