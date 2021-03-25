import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
// import Header from "./Components/Header.jsx";
import Navbar from "./Components/Navbar.jsx";
// import Portfolio from "./Components/Portfolio";
// import Skills from "./Components/Skills";
import MainComponent from "./Components/MainComponent";

import "./Styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={MainComponent}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
