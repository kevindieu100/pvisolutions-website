// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import { Link }       from 'react-router-dom';

class NavigationBar extends PureComponent {
  static propTypes = {
    brand:                    PropTypes.string,
    navModel:                 PropTypes.object
  };

  static defaultProps  = {
    brand  : 'brand'
  };

  render() {
    const {
      brand,
      navModel
    } = this.props;
    return (
      <header id="header" className="alt">
        <a href="index.html" className="logo">
            <strong>PVI</strong> <span>Solutions</span>
        </a>
        <nav>
            <a href="#menu">Menu</a>
        </nav>

        <nav id="menu">
          <ul className="links">
            {
              navModel.navigationLinks.map(
                (aLinkBtn, index) => {
                  return (
                    <li
                      key={index}
                    >
                      <Link
                        key={index}
                        to={aLinkBtn.link}
                      >
                        {aLinkBtn.label}
                      </Link>
                    </li>
                  );
                }
              )
            }
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavigationBar;
