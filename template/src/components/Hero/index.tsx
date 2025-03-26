//import 'whatwg-fetch';
//import 'core-js/stable';

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from 'components/Home/index';
import { About } from 'components/About/index';

import { Error } from 'components/Error/index';

export default function HeroSection() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="*" component={Error} />
      </Switch>
    </div>
  );
}
