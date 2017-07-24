import React from "react";

class IntroBanner extends React.Component {
  render() {
    return (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>
              <strong>PVI</strong> Solutions
            </h1>
          </header>
          <div className="content">
            <p>Products, Visions, Insights.</p>
            <ul className="actions">
              <li>
                <a href="#one" className="button next scrolly">
                  Who We Are
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroBanner;
