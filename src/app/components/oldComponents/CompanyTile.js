import React from "react";

class CompanyTile extends React.Component {
  render() {
    return (
      <article>
        <span className="image">
          <img src="images/pic05.jpg" alt />
        </span>
        <header className="major">
          <h3>
            <a href="landing.html" className="link">
              Consequat
            </a>
          </h3>
          <p>Ipsum dolor sit amet</p>
        </header>
      </article>
    );
  }
}

export default CompanyTile;
