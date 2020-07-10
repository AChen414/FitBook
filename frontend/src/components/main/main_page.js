import React from "react";
import Content from "./content"
import Footer from "./footer"
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page">
        <div className="jumbotron">
          <div className="jumbotron-content">
            <h1>FitBook</h1>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum imperdiet id ex in lobortis. Nullam.
            </p> */}

            <p>
              <a className="btn btn-primary btn-lg" href="#" role="button">
                {/* link to about us */}
                Learn more about us
              </a>
            </p>
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
              src="https://static1.squarespace.com/static/5a049a70be42d60e92dd8246/t/5e8ca6d075471a498775d7ee/1586276078521/Screen+Shot+2020-04-07+at+12.09.31+PM.png?format=1500w"
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
              src="https://media.self.com/photos/5c1423a59d0b1e66a38062ac/4:3/w_2560%2Cc_limit/GettyImages-912023438.jpg"
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
