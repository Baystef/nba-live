import { combineReducers } from 'redux';
import teamsReducer from './teamsReducer';
import standingsReducer from './standingsReducer';
import seasonReducer from './seasonReducer';

export default combineReducers({
  teams: teamsReducer,
  standings: standingsReducer,
  seasonType: seasonReducer
});
