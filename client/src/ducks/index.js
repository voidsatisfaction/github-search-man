import { combineReducers } from 'redux';

import searchedRepos from './searchedRepos';
import userInfo from './userInfo';

const reducer = combineReducers({
  searchedRepos,
  userInfo
});

export default reducer;