const message = {
  message: {
    type: 'PLEASE_GRAB_DOM',
    payload: {
      selectors: [
        {
          meaning: 'canonical_url',
          selector: "[rel='canonical']",
          property: 'href',
        },
        {
          meaning: 'page_type',
          selector: "[property='og:type']",
          property: 'content',
        }
      ],
    }
  }
};

function saveData({ key, data }, cb) {
  const objectToSet = {
    [key]: data,
  };
  console.log('want to save.. ', objectToSet);
  chrome.storage.local.set(objectToSet, cb);
}

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => { // eslint-disable-line
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      // See chrome/extension/inject.js to see what's being
      // returned here, because hackathon...
      if (response && response.message.type === 'HERE_DOM') {
        const payload = response.message.payload;
        // above selector maps to results
        // first result of page_type
        const isArticle = payload.results[1][0] &&
          payload.results[1][0].value === 'article';

        if (isArticle) {
          saveData({
            key: 'currentCanonicalUrl',
            data: payload.results[0][0] &&
             payload.results[0][0].value,
          }, () => { console.log('data saved'); });
        } else {
          // MARRONERADA PARA DEMO
          saveData({
            key: 'currentCanonicalUrl',
            data: 'NOT_AN_ARTICLE',
          });
        }
      }
      return;
    });
  });
});
