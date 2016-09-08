import { combineReducers } from 'redux';
import dashboard from './dashboard';
import albumList from './albumList';
import userInfo from './userInfo';

const albumApp = combineReducers({
  dashboard,
  albumList,
  userInfo
})

export default albumApp
