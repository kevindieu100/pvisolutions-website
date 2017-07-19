import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="alt">
        <a href="index.html" className="logo">
          <strong>PVI</strong> <span>Solutions</span>
        </a>
        <nav>
          <a href="#menu">Menu</a>
        </nav>
      </header>
    );
  }
}

export default Header;
