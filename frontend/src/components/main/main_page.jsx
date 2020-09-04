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
              <span className="text-muted">See for yourself.</span>
            </h2>
            <p className="lead">
              Choose from our vast database of exercises submitted by your
              coaches and friends!
            </p>
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
