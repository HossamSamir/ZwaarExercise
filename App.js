import React, { Component } from 'react';
import MainStackNavigator from './navigation/MainStackNavigator'
import { connect } from 'react-redux'

class App extends Component {
  render() {
		return <MainStackNavigator />
  }
}

const mapStateToProps = (state) => ({
	logged_in: state.login.logged_in
})

function mergeProps(stateProps, dispatchProps, ownProps) {
	const { dispatch } = dispatchProps;
	const { actions } = require('./Redux/LoginRedux');
	return {
		...ownProps,
		...stateProps,
		setLoggedIn: (logged_in) => actions.setLoggedIn(dispatch, logged_in),
	};
}

export default connect(mapStateToProps, undefined, mergeProps)(App)