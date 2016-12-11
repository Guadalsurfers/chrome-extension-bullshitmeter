const initialState = {
  currentPage: null,
  article: null,
  canVote: null,
  numVotes: 0,
  currentBullshitPercentage: 0.5, // this means no votes
  currentRating: null, // this is the rating of the user
};

export default function visitingPage(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_URL':
      return {
        ...state,
        currentPage: action.payload.url,
        currentCanVote: action.payload.canVote,
        currentNumVotes: action.payload.numVotes,
      };
    case 'SET_BULLSHIT_PERCENTAGE':
      return {
        ...state,
        currentBullshitPercentage: action.payload.bullshitPercentage,
        numVotes: action.payload.numVotes,
      };
    case 'SET_CURRENT_VOTE':
      return {
        ...state,
        currentRating: action.payload.rating,
      };
    case 'INCREASE_VOTE':
      return {
        ...state,
        numVotes: state.numVotes + 1,
      };
    default:
      return state;
  }
}
