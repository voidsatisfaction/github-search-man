import * as github from '../api/github';

/* ACTIONS */
const GET_SEARCHED_REPOS = 'repos/searched/GET';

/* REDUCER */
const initialState = [];

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SEARCHED_REPOS:
      return [
        ...action.data,
      ]
    default:
      return state;
  }
};

/* ACTION CREATORS */
export const getSearchedRepos = (payloads) => {
  const text = payloads.searchText;

  return function(dispatch) {
    return github.searchRepos({ text })
      .then((res, error) => {
        const data = res.data.items.map((element) => ({
          name: element.full_name,
          url: element.url,
          watchers: element.watchers,
          star: element.stargazers_count,
          language: element.language,
          updated: element.updated_at
        }));
        dispatch({ type: GET_SEARCHED_REPOS, data })
      });
  }
}

export default reducer;