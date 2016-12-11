export function setCurrentUrl(url) {
  return {
    type: 'SET_CURRENT_URL',
    payload: {
      url,
    },
  };
}

export function setBullshitPercentage(percentage) {
  return {
    type: 'SET_BULLSHIT_PERCENTAGE',
    payload: {
      bullshitPercentage: percentage,
    },
  };
}
