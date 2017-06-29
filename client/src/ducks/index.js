const initialState = {
  myRepos: [],
  searchedRepos: [],
  test: 'testing'
};

const storeOfApp = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: 'tested!!!!'
      };
    default:
      return state;
  } 
};

export default storeOfApp;