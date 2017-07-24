// @flow weak

import React                from 'react';
import {render}             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import { AppContainer }     from 'react-hot-loader';
import Root                 from './Root';

import 'babel-polyfill';
import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import './style/main.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './scripts/jquery.scrollex.min.js';
import './scripts/jquery.scrolly.min.js';
import './scripts/skel.min.js';
import './scripts/main.js';

const TARGET_ELEMENT  = 'root';
const targettedElement    = document.getElementById(TARGET_ELEMENT);

injectTpEventPlugin();

const renderApp = RootComponent => {
  render(
    <AppContainer>
      <RootComponent />
    </AppContainer>,
    targettedElement
  );
};

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './Root',
    () => {
      const RootComponent = require('./Root').default;
      renderApp(RootComponent);
    }
  );
}
