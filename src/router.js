import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/App';
import MainContainer from './app/MainContainer';
import HistoryContainer from './app/HistoryContainer';

export const routes = (
  <Route path="/" component={ App }>
    <Route path="main" component={ MainContainer } />
    <Route path="history" component={ HistoryContainer } />
  </Route>
);
