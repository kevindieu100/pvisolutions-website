// @flow weak

import React, {
  PureComponent
}                             from 'react';
import {
  NavigationBar,
  IntroBanner,
  Header,
  ContactSection,
  BackToTop
}                             from '../../components';
import navigationModel        from '../../models/navigation.json';
import contentModel           from '../../models/content.json';
import aboutModel             from '../../models/about.json';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as viewsActions      from '../../redux/modules/views';
import { fromJS }             from 'immutable';
import MainRoutes             from '../../routes/MainRoutes';
import { withRouter }         from 'react-router';

class App extends PureComponent {
  state = {
    navModel : navigationModel,
    contentModel: contentModel,
    aboutModel: aboutModel
  };

  render() {
    const { navModel, contentModel, aboutModel } = this.state;
    return (
      <div id="wrapper">
        <NavigationBar
          brand={navModel.brand}
          navModel={navModel}
        />
        <IntroBanner
          introBannerModel={contentModel.homePage.introBannerModel}
        />
        {/*<div className="container-fluid">
          <MainRoutes />
        </div>
        <BackToTop
          minScrollY={40}
          scrollTo={'appContainer'}
        />*/}
        <ContactSection
          aboutModel={aboutModel}
        />
      </div>
    );
  }

  handleLeftNavItemClick = (event, viewName) => {
    // something to do here?
  }

  handleRightNavItemClick = (event, viewName) => {
    // something to do here?
  }
}

const mapStateToProps = (state) => {
  return {
    currentView: state.getIn(['views', 'currentView'])
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions : bindActionCreators(
      {
        ...viewsActions
      },
      dispatch)
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
