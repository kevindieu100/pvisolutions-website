import React from "react";
import AboutSection from "./AboutSection";
import CompanySection from "./CompanySection";

class MainWrapper extends React.Component {
  render() {
    return (
      <div id="main">
        <AboutSection />
        <CompanySection />
      </div>
    );
  }
}

export default MainWrapper;
