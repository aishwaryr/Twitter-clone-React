// @flow

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Feed from "./Feed";
import Data from "./Data";
import preload from "../data.json";

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          component={props => <Feed tweets={preload.tweets} {...props} />}
        />
        <Route path="/data" component={Data} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
