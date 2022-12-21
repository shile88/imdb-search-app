import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAsyncMovies } from "../features/movies/movieSlice";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if( search !== "") {
        setSearch("");
        dispatch(fetchAsyncMovies(search));
        navigate("/");
    }
  };

  return (
    <form className="right menu" onSubmit={submitHandler}>
      <div className="item">
        <div className="ui icon input">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="search link icon"></i>
        </div>
      </div>
      <div className="ui item">
        <button className="ui button yellow" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
