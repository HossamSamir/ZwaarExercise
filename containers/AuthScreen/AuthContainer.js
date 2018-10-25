import React, { Component } from 'react'
import { connect } from 'react-redux';
import AuthScreen from '../AuthScreen'

export class AuthContainer extends Component {
  state = {
    isLoggedIn: false,
    isLoading: false,
    isAppReady: false
  }
  _simulateLogin = (username, password) => {
    this.props.setLoggedIn(true)
  }

  _simulateSignup = (username, password, fullName) => {
    this.props.setLoggedIn(true)
  }

  render () {
    return (
      <AuthScreen
        login={this._simulateLogin}
        signup={this._simulateSignup}
        isLoggedIn={this.state.isLoggedIn}
        isLoading={this.state.isLoading}
        onLoginAnimationCompleted={() => this.setState({ isAppReady: true })}
      />
    )
  }
}

const mapStateToProps = state => ({
  logged_in: state.login.logged_in,
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const { actions } = require('../../Redux/LoginRedux');
  return {
    ...ownProps,
    ...stateProps,
    setLoggedIn: logged_in => actions.setLoggedIn(dispatch, logged_in),
  };
}

export default connect(
  mapStateToProps,
  undefined,
  mergeProps,
)(AuthContainer);
