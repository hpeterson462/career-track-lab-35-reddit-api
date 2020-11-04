import { combineReducers } from 'redux';
import subredditReducer from './su'

export default combineReducers({
  subreddit: () => subredditReducer
});
