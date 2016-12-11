const initialState = {
  authentication_token: null,
  email: null,
  first_name: null,
  id: null,
  last_name: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload.user };
    default:
      return state;
  }
}
