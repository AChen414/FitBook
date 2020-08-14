import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from "react-transition-group";
import { Link  } from "react-router-dom";


function Result(props) {
  debugger
    return (
      <CSSTransitionGroup
        className="fitness-result fitness-test-container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div className="fitness-result-content">
          {/* You prefer <strong>{props.quizResult}</strong>! */}
          <div>
            Based on your quiz we recommened that you work out 3 times a week
          </div>
        </div>
        <div>
          <Link to={`/workouts`}>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => props.closeModal()}
            >
              Create A Workout Now!
            </button>
          </Link>

          <Link to={`/exercises`}>
            <button
              type="button"
              className="btn btn-info"
              onClick={() => props.closeModal()}
            >
              Search For Exercises!
            </button>
          </Link>
        </div>
      </CSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;