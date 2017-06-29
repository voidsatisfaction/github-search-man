/* ACTIONS */
const GET_USER_INFO = 'user/info/GET';

/* REDUCER */
const initialState = {
  token: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USER_INFO:
      break;
    default:
      return state;
  }
};

/* ACTION CREATORS */
export const getUserInfo = (payloads) => {
  return { type: GET_USER_INFO, payloads };
}

export default reducer;