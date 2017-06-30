import * as oauth from '../api/oauth';

/* ACTIONS */
const GET_USER_INFO = 'user/info/GET';

/* REDUCER */
const initialState = {
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        token: action.payloads.token,
      };
    default:
      return state;
  }
};

/* ACTION CREATORS */
export const getUserInfo = (payloads) => {
  return function(dispatch) {
    return oauth.getToken({ platform: payloads.platform, code: payloads.code })
      .then((response) => {
        const payloads = { token: response.data.token };
        dispatch({ type: GET_USER_INFO, payloads });
      });
  };
}

export default reducer;