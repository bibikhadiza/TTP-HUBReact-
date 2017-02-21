import React, { Component, PropTypes } from 'react';
import LoginFormContainer from '../auth/LoginFormContainer';
import C from '../auth/constants';
import DashboardContainer from '../dashboard/DashboardContainers'
import HistoryContainer from "../history/HistoryContainer"


class Main extends Component {

  static propTypes() {
    return {
      authStatus: PropTypes.string.isRequired
    };
  };

  render() {
    if (this.props.authStatus === C.LOGGED_IN) {
     if (this.props.showJob) {
      return <HistoryContainer />
     } else {
     return <DashboardContainer />
     }

    } else {
      return <LoginFormContainer />

    }
  }
};

export default Main;
