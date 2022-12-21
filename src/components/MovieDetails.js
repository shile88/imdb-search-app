import React from "react";

const MovieDetails = ({ data }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th><h2>Movie Details</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i className="video icon"></i><strong>Director:</strong> {data.Director}</td>
        </tr>
        <tr>
          <td><i className="play icon"></i><strong>Released:</strong> {data.Released}</td>
        </tr>
        <tr>
          <td><i className="chart bar icon"></i><strong>IMDB rating:</strong> {data.imdbRating} ({data.imdbVotes} votes)</td>
        </tr>
        <tr>
          <td><i className="edit icon"></i><strong>Genre:</strong> {data.Genre}</td>
        </tr>
        <tr>
          <td><i className="star icon"></i><strong>Awards:</strong> {data.Awards}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MovieDetails;
