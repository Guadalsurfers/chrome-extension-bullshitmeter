export function setCurrentUrl(url) {
  return {
    type: 'SET_CURRENT_URL',
    payload: {
      url: url,
    },
  };
}
