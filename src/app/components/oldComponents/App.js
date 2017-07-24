import React, { Component } from 'react';
import Header from "./Header";
import Navigation from "./Navigation";
import IntroBanner from "./IntroBanner";
import MainWrapper from "./MainWrapper";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
        <div id="wrapper">
          <Header />
          <Navigation />
          <IntroBanner />
          <MainWrapper />
          <Footer />
        </div>
    );
  }
}
