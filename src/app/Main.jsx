import React, { Component, PropTypes } from 'react';
import LoginFormContainer from '../auth/LoginFormContainer';
import C from '../auth/constants';
import DashboardContainer from '../dashboard/DashboardContainers'

class Main extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired
    };
  };

  render() {
    if (this.props.authStatus === C.LOGGED_IN) {
      return <DashboardContainer />

    } else {
      return <LoginFormContainer />

    }
  }
};

export default Main;
