const initialState = {
  currentPage: null,
  currentBullshitPercentage: null,
};

export default function visitingPage(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_URL':
      return { ...state, currentPage: action.payload.url };
    case 'SET_BULLSHIT_PERCENTAGE':
      return { ...state, currentBullshitPercentage: action.payload.bullshitPercentage };
    default:
      return state;
  }
}
