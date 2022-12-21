import React, { useEffect } from "react";
import MainScreen from "./MainScreen";
import DetailsScreen from "./DetailsScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchAsyncMovies } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux";


const Movies = () => {
  const dispatch = useDispatch();
  const movieDefault = "Batman";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieDefault));
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/movie/:imdbID" element={<DetailsScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Movies;
