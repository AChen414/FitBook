import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="jumbotron">
          <div className="jumbotron-content">
            <h1>FitBook</h1>
            {/* <p>
              Take our 1 minute quiz below to discover the right workout program
              for you and your body:
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={() => this.props.openModal("testquiz")}
            >
              Begin
            </button> */}
          </div>
        </div>

        <div className="fit-quiz-container">
          <div className="fit-quiz-start">
            <p>
              Take our 1 minute quiz below to discover the right workout program
              for you and your body:
            </p>
            <button
              className="btn btn-primary btn-lg btn-fit"
              onClick={() => this.props.openModal("testquiz")}
            >
              TAKE THE QUIZ
            </button>
          </div>
        </div>
        <hr className="featurette-divider" />
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Dynamic Scheduling.{" "}
              <span className="text-muted">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Add and share your workout schedule with all your friends.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="featurette-image img-responsive center-block"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/home-page-schedule.png"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">
              Personalized Workout Builder.{" "}
              {/* <span className="text-muted">See for yourself.</span> */}
              
            </h2>
            <p className="lead">
              Create your own custom workouts! If you don't see an exercise you
              want, create it!
            </p>
            <a href="#/workouts" className="btn btn-primary btn-lg btn-fit">
              CREATE A NEW WORKOUT
            </a>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <img
              className="featurette-image img-responsive center-block"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/home-page-ladies.jpg"
              data-holder-rendered="true"
            />
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>
    );
  }
}

export default MainPage;
