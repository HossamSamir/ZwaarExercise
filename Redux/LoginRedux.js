export const types = {
  SET_LOGGED_IN: 'SET_LOGGED_IN',
};

export const actions = {
  setLoggedIn: (dispatch, logged_in, access_token) => {
    dispatch({ type: types.SET_LOGGED_IN, logged_in, access_token });
  },
};

const initialState = {
  logged_in: false,
  access_token: null,
};

export const reducer = (state = initialState, action) => {
  const { logged_in, access_token } = action;

  switch (action.type) {
    case types.SET_LOGGED_IN:
      return { ...state, logged_in, access_token };
    default:
      return state;
  }
};
