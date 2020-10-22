import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Panetone from './pages/Panetone';
import CreatePanetone from './pages/CreatePanetone';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/app" component={Home} />
        <Route path="/panetones/add" component={CreatePanetone} />
        <Route path="/panetones/:id" component={Panetone} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
