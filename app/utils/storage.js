function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

function setBadge(text) {
  if (chrome.browserAction) {
    chrome.browserAction.setBadgeText({
      text: text.toString()
    });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      const bullshitPercentage = state.visitingPage.currentBullshitPercentage;
      saveState(state);

      if (bullshitPercentage) {
        setBadge(bullshitPercentage);
      }
    });
    return store;
  };
}
