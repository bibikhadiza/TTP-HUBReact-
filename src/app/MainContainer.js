import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = state => {
  return {
    authStatus: state.getIn(['auth', 'authStatus'])

  };
};

const MainContainer = connect(mapStateToProps)(Main);

export default MainContainer;
