import React from 'react';
import { Link } from "react-router-dom"

class Content extends React.Component {
    render() {
        return (
          <div id="homepage">
            <div className="header-container">
              <div className="header-word">Check out our Exercise</div>
              <button className="explore-button">
                <Link to="/exercises">Click to Explore</Link>
              </button>
            </div>
            <div id="about-us-container">
              <div className="about-us-left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                ducimus totam earum, perferendi
              </div>
              <div className="about-us-right">
                <img
                  src="https://www.stylist.co.uk/images/app/uploads/2020/02/10112154/gettyimages-942459930-256x256.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
                  alt="about-us"
                />
              </div>
            </div>
          </div>
        );
    }
}

export default Content;