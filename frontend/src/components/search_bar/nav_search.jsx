import React from "react";
import { Link, Redirect } from "react-router-dom";

const NavBarSearch = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    searchBusiness(search).then(() => <Redirect to="/exercises/search" />);
  };

  const update = () => {
    return (e) => setSearch(e.target.value);
  };

  const searchBar = (
    <form className="search-bar-show" onSubmit={onSubmit}>
      <span className="description find">Find</span>
      <input
        className="search-bar"
        type="text"
        placeholder=""
        onChange={update()}
      />
      <button id="search-submit" type="submit">
        <i className="material-icons show-search-icon">search</i>
      </button>
    </form>
  );

  return searchBar;
};

export default NavBarSearch;
