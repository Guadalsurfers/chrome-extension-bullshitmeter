import { API_URL } from '../constants/networking';

export function setCurrentUrl(url) {
  return (dispatch, getState) => {
    const currentPage = getState().visitingPage.currentPage;
    const currentUser = getState().user;

    fetch(`${API_URL}/articles?url=${encodeURIComponent(url)}&user[id]=${currentUser.id}&user[authentication_token]=${currentUser.authentication_token}`, {
      method: 'GET',
    }).then(res => res.json())
    .then((res) => {
      dispatch({
        type: 'SET_CURRENT_URL',
        payload: {
          url,
          canVote: res.can_vote,
          numVotes: res.num_votes,
          article: res.article,
        },
      });

      // if there is current votes of the article
      dispatch({
        type: 'SET_BULLSHIT_PERCENTAGE',
        payload: {
          bullshitPercentage: res.article ? res.article.bs_index : 0.5,
        },
      });

      dispatch({
        type: 'SET_CURRENT_VOTE',
        payload: {
          bullshitPercentage: res.article ? res.article.bs_index : 0.5,
        },
      });
    });
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
