import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchBar from "./search_bar";
import { searchExercise } from "../../actions/exercise_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.type,
    exercises: ownProps.exercises,
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
