import { combineReducers } from 'redux';

// Import all reducers
import { reducer as LoginRedux } from './LoginRedux';

// Combine the imported reducers
const AppReducers = combineReducers({
  login: LoginRedux,
});

// Export the combined reducers
export default AppReducers;
