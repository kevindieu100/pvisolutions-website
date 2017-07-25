// @flow weak

import React, {
  PureComponent
}                         from 'react';
import PropTypes          from 'prop-types';
import { Link }       from 'react-router-dom';

class IntroBanner extends PureComponent {
  static propTypes = {
    introBannerModel:              PropTypes.object
  };

  static defaultProps  = {
    header: 'Brand Header',
    subHeader: 'Brand Subheader',
    actionButton: {
        label: "Action",
        link: "#"
    }
  };

  render() {
    const {
        introBannerModel
    } = this.props;
    return (
        <section id="banner" className="major">
            <div className="inner">
            <header className="major">
                <h1>
                <strong>PVI</strong> Solutions
                </h1>
            </header>
            <div className="content">
                <p>{ introBannerModel.subHeader }</p>
                <ul className="actions">
                    <li>
                        <Link
                            to={ introBannerModel.actionButton.link }
                            className="button next scrolly"
                        >
                            { introBannerModel.actionButton.label }
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
        </section>
    );
  }
}

export default IntroBanner;
