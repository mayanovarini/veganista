import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OrderOwner from "./OrderOwner";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={OrderOwner} />
      <Route path="/owner/:ownerId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
