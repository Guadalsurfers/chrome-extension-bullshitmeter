const initialState = {
  userId: null,
  userToken: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.payload.token };
    default:
      return state;
  }
}
