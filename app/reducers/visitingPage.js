import { Map } from 'immutable';

const initialState = new Map({
  currentPage: null,
});

export default function visitingPage(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_URL':
      return state.set('currentPage', action.payload.url);
    default:
      return state;
  }
}
