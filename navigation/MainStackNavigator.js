import React from 'react';
import { createStackNavigator, } from 'react-navigation';
import { connect } from 'react-redux';
import AuthScreen from "../containers/AuthScreen/AuthContainer"
import ProfileScreen from "../containers/ProfileScreen"
import ExamResultsScreen from "../containers/ExamResultsScreen"


const RootNavigatorCore = ({ screenProps, initialRouteName }) => {
  const routeConfigs = {
    AuthScreen: {
      screen: AuthScreen,
      navigationOptions: {
        header: null
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    ExamResultsScreen: {
      screen: ExamResultsScreen,
      navigationOptions: {
        header: null
      }
    },
  };

  const stackNavigatorConfigs = {
    initialRouteName, // this is passed to the navigator
    navigationOptions: props => ({
      header: ({ navigation }) => null,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  };

  const NavigatorWithScreenProps = createStackNavigator(
    routeConfigs,
    stackNavigatorConfigs,
  );
  return <NavigatorWithScreenProps screenProps={screenProps} />;
};

const MainStackNavigator = ({
  logged_in, screenProps,
}) => {
  return (
    <RootNavigatorCore
        // Pass screen props normally
      screenProps={screenProps}
        // Determine what the initial route screen is
      initialRouteName={
            logged_in ? "ProfileScreen" : "AuthScreen"
        }
    />
  );
};

const mapStateToProps = state => ({
  logged_in: state.login.logged_in,
});

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const { actions } = require('../Redux/LoginRedux');
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
)(MainStackNavigator);
