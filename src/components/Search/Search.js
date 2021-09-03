import React from "react";
import "./Search.style.css";

const Search = ({ userInput, onChangeInput, onClickSearchBtn }) => {
  return (
    <header className="search-bar__wrapper">
      <input value={userInput} onChange={onChangeInput} />
      <button onClick={onClickSearchBtn}>Search</button>
    </header>
  );
};

export default Search;
