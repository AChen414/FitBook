import React from "react";
import NavBarSearch from "./navbar_search";

const SearchBar = (props) => {
  return (
    <NavBarSearch
    searchBusiness={props.searchBusinesses}
    match={props.match}
    history={props.history}
    />
  );
};

export default SearchBar;
