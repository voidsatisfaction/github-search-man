import * as oauth from '../api/oauth';
import * as github from '../api/github/';

/* ACTIONS */
const GET_USER_INFO = 'user/info/GET';
const GET_WATCHING_REPOS = 'user/watching/GET';

const ADD_WATCHING_REPO = 'user/info/POST';

/* REDUCER */
const initialState = {
  token: '',
  watchingRepos: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        token: action.payloads.token,
      };
    case GET_WATCHING_REPOS:
      return {
        ...state,
        watchingRepos: [
          ...state.watchingRepos,
          ...action.payloads.watchingRepos
        ],
      };
    case ADD_WATCHING_REPO:
      return {
        ...state,
        watchingRepos: [
          action.payloads,
          ...state.watchingRepos
        ],
      };
    default:
      return state;
  }
};

/* ACTION CREATORS */
export const getWatchingRepos = (payloads) => {
  return function(dispatch) {
    return github.getMyWatchingRepos({ token: payloads.token })
      .then((response) => {
        console.log(response);
        const payloads = {
          watchingRepos: response.data
        };
        return dispatch({ type: GET_WATCHING_REPOS, payloads });
      })
  };
}

export const getUserInfo = (payloads) => {
  return function(dispatch) {
    return oauth.getToken({ platform: payloads.platform, code: payloads.code })
      .then((response) => {
        const token = response.data.token;
        const payloads = { token };
        dispatch({ type: GET_USER_INFO, payloads });
        return token;
      })
      .then((token) => {
        return dispatch(getWatchingRepos({ token }))
      })
  };
}

export const addWatchingRepos = (payloads) => {
  return function(dispatch) {
    payloads = {
      id: payloads.id,
      name: payloads.name.split('/')[1],
      owner: {
        login: payloads.name.split('/')[0]
      },
      subscriptionUrl:payloads.subscriptionUrl
    };
    console.log(payloads);
    return dispatch({ type: ADD_WATCHING_REPO, payloads });
  };
}

export default reducer;