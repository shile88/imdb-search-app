import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="ui stackable inverted menu">
    <Link to="/">
      <div className="item">
        <div className="ui image small">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
            alt="logo"
          />
        </div>
      </div>
    </Link>

    <SearchBar />
  </div>
);

export default Header;
