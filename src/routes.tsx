import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Calendar } from "./pages";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Calendar} path="/" exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
