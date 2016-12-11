import { API_URL } from '../constants/networking';

export function setCurrentUrl(url) {
  return (dispatch, getState) => {
    const currentPage = getState().visitingPage.currentPage;

    if (url !== currentPage) {
    // We have change paged, now we have to see information from that paged

      fetch(`${API_URL}/articles?url=${encodeURIComponent(url)}`, {
        method: 'GET',
      }).then(res => res.json())
      .then((res) => {
        dispatch({
          type: 'SET_CURRENT_URL',
          payload: {
            url,
            canVote: res.can_vote,
            numVotes: res.num_votes,
          },
        });
      });
    }
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
