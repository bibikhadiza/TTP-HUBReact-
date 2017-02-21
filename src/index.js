import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { loginSuccess, logout } from './auth/actions';
import C from './constants'
import { routes } from './router.js';
import { store, history } from './store.js';
// Styling
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      { routes }
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// Start listening to firebase auth changes.
C.FIREBASE.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(loginSuccess(user));
  } else {
    store.dispatch(logout());
  }
}, err => {
  console.log(err);
});
