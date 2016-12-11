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

export function getCurrentArticleData() {
  return (dispatch) => {
    const reply = {
      article: {
      url: 'http://loquesea/',
      bs_index: 80,
      },
      num_votes: num_votes,
      // can_vote: !!user&.can_vote_article?(article)
    };
  };
}
