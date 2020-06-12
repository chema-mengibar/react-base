import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { hot } from "react-hot-loader";

import { NavContextProvider } from "./helpers/contexts/Nav.context";
import Intro from "./components/pages/intro";

const SUBDIR = ___SUBDIR___;

function App() {
  return (
    <NavContextProvider>
      <Router basename={`${SUBDIR}`}>
        <Switch>
          <Route path="/" component={Intro} />
        </Switch>
      </Router>
    </NavContextProvider>
  );
}

export default hot(module)(App);
