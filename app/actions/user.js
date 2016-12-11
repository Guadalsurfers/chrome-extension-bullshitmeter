import serialize from 'serialize-javascript';
import { API_URL } from '../constants/networking';

export function getGoogleToken() {
  return (dispatch, getState) => {
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
          console.log('RECEIVED RESPONSE FROM SERVER');
        });

        // dispatch({
        //   type: 'SET_TOKEN',
        //   payload: {
        //     token,
        //   },
        // });
      }
    });
  };
}
