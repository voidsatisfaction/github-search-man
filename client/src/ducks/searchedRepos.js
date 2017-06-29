/* ACTIONS */
const GET_SEARCHED_REPOS = 'repos/searched/GET';

/* REDUCER */
const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SEARCHED_REPOS:
      break;
    default:
      return state;
  }
};

/* ACTION CREATORS */
export const getSearchedRepos = (payloads) => {
  return { type: GET_SEARCHED_REPOS, payloads };
}

export default reducer;