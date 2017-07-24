// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import * as Immutable     from 'immutable';

class Header extends PureComponent {
  static propTypes = {
    brand:                    PropTypes.string,
    navModel: PropTypes.instanceOf(Immutable.Map)
    // not immutable version of navModel would be described like:
    // navModel:  PropTypes.shape({
    //   leftLinks:  PropTypes.arrayOf(
    //     PropTypes.shape({
    //       label: PropTypes.string.isRequired,
    //       link : PropTypes.string.isRequired
    //     })
    //   ).isRequired,
    //   rightLinks:  PropTypes.arrayOf(
    //     PropTypes.shape({
    //       label: PropTypes.string.isRequired,
    //       link : PropTypes.string.isRequired
    //     })
    //   ).isRequired
    // })
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
        </header>
    );
  }
}

export default Header;
