import React from "react";

class MainPage extends React.Component {
  render() {
    
    const handleQuizDisplay = Object.keys(this.props.user).length !== 0 ? (
      <div className="row featurette">
        <div className="col-md-7 col-md-push-5">
          <h2 className="featurette-heading">
            Take Our 1 Minute Quiz {" "} 
          </h2>
          <p className="lead">
            Discover the right workout program for you and your body
            <br/>
            <br/>
            <button
              className="btn btn-primary btn-lg btn-fit"
              onClick={() => this.props.openModal("testquiz")}
            >
              FREE EVALUATION TOOL
            </button>
          </p>
        </div>
        <div className="col-md-5 col-md-pull-7">
          <img
            className="featurette-image img-responsive center-block"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src="https://fit-book-bucket.s3-us-west-1.amazonaws.com/fitquizgif.gif"
            data-holder-rendered="true"
          />
        </div>
      </div>
    ) : (
        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">
              Get Started Today And Receive Our Free Evaluation Tool{" "}
            </h2>
            <p className="lead">
              <br />
              <button
                className="btn btn-primary btn-lg btn-fit "
                onClick={() => this.props.history.push("/signup")}
              >
                Sign Up Now!
            </button>
            </p>
          </div>
          <div className="col-md-5 col-md-pull-7">
            <img
              className="featurette-image img-responsive center-block"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="https://fit-book-bucket.s3-us-west-1.amazonaws.com/fitquizgif.gif"
              data-holder-rendered="true"
            />
          </div>
        </div>
    )
    return (
      <div className="main-page">
        <div className="jumbotron">
          <div className="jumbotron-content">
            <h1>FitBook</h1>
          </div>
        </div>
{/* 
        <div className="fit-quiz-container">

          {handleQuizDisplay}
        </div> */}

        <hr className="featurette-divider" />

        {handleQuizDisplay}


        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Dynamic Scheduling.{" "}
              <span className="text-muted">It'll blow your mind.</span>
            </h2>
            <p className="lead">
              Drag and drop your workouts onto the calendar to add them to your 
              schedule.
            </p>
          </div>
          <div className="col-md-5">
            {/* <img
              className="featurette-image img-responsive center-block"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/home-page-schedule.png"
              data-holder-rendered="true"
            /> */}
            <img
              className="featurette-image img-responsive center-block"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/calendar.gif"
              data-holder-rendered="true"
            />
          </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
          <div className="col-md-7 col-md-push-5">
            <h2 className="featurette-heading">
              Grow Your Exercise List.
            </h2>
            <p className="lead">
              Grow your list of exercises. Create and categorize any exercise 
              you wish to do.
            </p>
            </div>
            <div className="col-md-5 col-md-pull-7">
              <img
                className="featurette-image img-responsive center-block"
                data-src="holder.js/500x500/auto"
                alt="500x500"
                src="https://fitbook-seeds.s3-us-west-1.amazonaws.com/exercises.gif"
                data-holder-rendered="true"
              />
            </div>
        </div>

        <hr className="featurette-divider"/>

        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">
              Personalized Workout Builder.{" "}
              {/* <span className="text-muted">See for yourself.</span> */}
              
            </h2>
            <p className="lead">
              Create your own custom workouts! If you don't see the exercise you
              want, create it!
            </p>
            <a href="#/workouts" className="btn btn-primary btn-lg btn-fit">
              CREATE A NEW WORKOUT
            </a>
          </div>
          <div className="col-md-5">
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
