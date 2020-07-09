import React from "react";
import Content from "./content"
import Footer from "./footer"

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default MainPage;
