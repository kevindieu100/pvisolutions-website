import React from "react";
import CompanyTile from "./CompanyTile";

class CompanySection extends React.Component {
  render() {
    return (
      <section id="one" className="tiles">
        <CompanyTile />
        <CompanyTile />
        <CompanyTile />
        <CompanyTile />
        <CompanyTile />
      </section>
    );
  }
}

export default CompanySection;
