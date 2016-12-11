const initialState = {
  currentPage: null,
  canVote: null,
  numVotes: null,
  currentBullshitPercentage: null,
  currentRating: null,
};

export default function visitingPage(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_URL':
      return {
        ...state,
        currentPage: action.payload.url,
        canVote: action.payload.canVote,
        numVotes: action.payload.numVotes,
      };
    case 'SET_BULLSHIT_PERCENTAGE':
      return { ...state, currentBullshitPercentage: action.payload.bullshitPercentage };
    case 'SET_CURRENT_VOTE':
      return { ...state, currentRating: action.payload.rating };
    default:
      return state;
  }
}
