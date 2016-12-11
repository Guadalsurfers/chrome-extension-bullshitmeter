const initialState = {
  currentPage: null,
  currentBullshitPercentage: null,
};

export default function visitingPage(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_URL':
      return { ...state, currentPage: action.payload.url };
    default:
      return state;
  }
}
