import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import movieApi from "../../services/movieApi";

const apiKey = process.env.REACT_APP_API_KEY

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (search) => {
    const response = await movieApi.get(
      `?apikey=${apiKey}&s=${search}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${apiKey}&i=${id}&Plot=full`);

    return response.data;
  }
);

const initialState = {
  movies: {},
  selectedMovie: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {};
    },
  },
 extraReducers: (builder) => {
    builder
        .addCase(fetchAsyncMovies.fulfilled, (state, {payload}) => {
            return { ...state, movies: payload };
        })
        .addCase(fetchAsyncMovieDetail.fulfilled, (state,  {payload}) => {
            return { ...state, selectedMovie: payload };
        })
 }
    
});

export const { removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getSelectedMovie = (state) => state.movies.selectedMovie;
export default movieSlice.reducer;




