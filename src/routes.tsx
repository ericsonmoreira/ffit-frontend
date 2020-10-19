import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import PanetoneDetails from "./pages/PanetoneDetails";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={Home} />
        <Route path="/panetones/:id" component={PanetoneDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
