import { combineReducers } from 'redux';

import myWatchingRepos from './myWatchingRepos';
import searchedRepos from './searchedRepos';
import userInfo from './userInfo';

const reducer = combineReducers({
  myWatchingRepos,
  searchedRepos,
  userInfo
});

export default reducer;