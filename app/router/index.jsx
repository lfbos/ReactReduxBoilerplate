import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import App from 'App';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={App}/>
    </Route>
  </Router>
);
