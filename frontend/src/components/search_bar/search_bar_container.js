import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./search_bar";
import { searchBusinesses } from "../../actions/business_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.type,
    businesses: ownProps.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchBusinesses: (search) => dispatch(searchBusinesses(search)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
