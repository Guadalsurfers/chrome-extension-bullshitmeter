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
      ],
    }
  }
};

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => { // eslint-disable-line
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      if (response && response.message.type === 'HERE_DOM') {
        console.log('received dom', response.message.payload);
      }
      return;
    });
  });
});
