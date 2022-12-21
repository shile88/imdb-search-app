import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieDetails from "./MovieDetails";
import MovieCover from "./MovieCover";
import Header from "./Header";
import MovieList from "./MovieList";
import {
  fetchAsyncMovieDetail,
  getSelectedMovie,
  removeSelectedMovie,
} from "../features/movies/movieSlice";

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
        <div className="ui raised very padded text container loading basic segment"></div>
      ) : (
        <div className="ui fluid container">
          <div className="ui container">
            <div className="ui stackable grid proba">
              <div className="four wide column">
                <MovieCover data={data} />
              </div>
              <div className="twelve wide column">
                <MovieDetails data={data} />
              </div>
            </div>
          </div>
        
            <h1 className="similar-movies">More movies like this:</h1>
            <div className="ui grid"> 
                <div className="computer only ten column">                
                    <MovieList />    
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default DetailsScreen;
