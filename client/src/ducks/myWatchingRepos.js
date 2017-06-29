/* Actions */
const GET_WATCHING_REPOS = 'repos/watching/GET';

/* Reducer */
const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_WATCHING_REPOS:
      break;
    default:
      return state;
  }
};

/* Action Creators */
export const getWatchingRepos = (payloads) => (
  { type: GET_WATCHING_REPOS, payloads }
);

export default reducer;