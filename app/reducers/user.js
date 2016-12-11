const initialState = {
  userId: null,
  userToken: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload.user };
    default:
      return state;
  }
}
