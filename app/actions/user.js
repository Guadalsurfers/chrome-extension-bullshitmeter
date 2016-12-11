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
        dispatch({
          type: 'SET_TOKEN',
          payload: {
            token,
          },
        });
      }
    });
  };
}
