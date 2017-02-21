import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './app/App';
import { history } from './store.js';
import MainContainer from './app/MainContainer';

export const routes = (
  <Router
    history={ history }
  >
    <Route path="/" component={ App }>
      <IndexRoute component={ MainContainer } />

    </Route>

  </Router>
);
