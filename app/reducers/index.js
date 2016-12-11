import { combineReducers } from 'redux';
import visitingPage from './visitingPage';
import user from './user';

export default combineReducers({
  visitingPage,
  user,
});
