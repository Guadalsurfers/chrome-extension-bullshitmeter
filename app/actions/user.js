import serialize from 'serialize-javascript';
import { API_URL } from '../constants/networking';

export function getGoogleToken() {
  return (dispatch) => {
    chrome.identity.getAuthToken({ interactive: true }, (token) => {
      if (chrome.runtime.lastError) {
        //
      } else {
        // TODO: dispatch an thunk that
        // calls the login endpoint
        // POST /api/users
        // POST: google_token

        // returns serializer user
        const myHeaders = new Headers({
          'Content-Type': 'application/json',
        });

        fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: myHeaders,
          body: serialize({
            google_token: token,
          }),
        }).then(res => res.json())
        .then((json) => {
          dispatch({
            type: 'SET_USER',
            payload: {
              user: json.user,
            },
          });
        });
      }
    });
  };
}


export function vote(rating) {
  return (dispatch, getState) => {
    if (!getState().user.authentication_token) {
      // This should not happen
      return;
    }

    const userState = getState().user;
    const visitingPageState = getState().visitingPage;

    const myHeaders = new Headers({
      'Content-Type': 'application/json',
    });

    // Optimistic update for the lulz of hackathon

    dispatch({
      type: 'SET_CURRENT_VOTE',
      payload: {
        rating,
      },
    });

    const actualNumVotes = visitingPageState.numVotes || 0;
    const newBullshitPercentage = ((visitingPageState.currentBullshitPercentage * actualNumVotes) + rating) / (actualNumVotes + 1);

    debugger;
    dispatch({
      type: 'SET_BULLSHIT_PERCENTAGE',
      payload: {
        bullshitPercentage: newBullshitPercentage,
        numVotes: actualNumVotes + 1,
      },
    })

    fetch(`${API_URL}/votes`, {
      method: 'POST',
      headers: myHeaders,
      body: serialize({
        user: {
          id: userState.id,
          authentication_token: userState.authentication_token,
        },
        vote: {
          article_url: visitingPageState.currentPage,
          rating,
        },
      }),
    }).then(res => res.json())
    .then((json) => {
      // something nifty with success true;
    });
  };
}
