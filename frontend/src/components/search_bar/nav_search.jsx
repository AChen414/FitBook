import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

const NavBarSearch = (props) => {
  const { searchBusiness, match, history } = props;
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchBusiness(search).then(() => <Redirect to="/businesses/search" />);
  };

  const update = () => {
    return (e) => setSearch(e.target.value);
  };

  const searchBar = (
    <form className="search-bar-show" onSubmit={onSubmit}>
      <span className="description find">Find</span>
      <input
        className="left-side-search"
        type="text"
        placeholder="restaurants, boba, coffee..."
        onChange={update()}
      />
      <span className="description border-near">Near</span>
      <input className="middle-search" type="text" placeholder="App Academy" />
      <button id="search-submit" type="submit">
        <i className="material-icons show-search-icon">search</i>
      </button>
    </form>
  );

  return searchBar;
};

export default NavBarSearch;
