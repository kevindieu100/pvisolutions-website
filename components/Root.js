import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import IntroBanner from "./components/IntroBanner";
import MainWrapper from "./components/MainWrapper";
import Footer from "./Footer";

const App = () => (
  <div id="wrapper">
    <Header />
    <Navigation />
    <IntroBanner />
    <MainWrapper />
    <Footer />
  </div>
)

render(<App />, document.getElementById('target'));
