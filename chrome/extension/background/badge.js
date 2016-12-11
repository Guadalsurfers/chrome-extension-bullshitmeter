chrome.storage.local.get('visitingPage', (obj) => {
  let visitingPage = obj.visitingPage;
  if (visitingPage) {
    visitingPage = JSON.parse(visitingPage);

    if (visitingPage.currentBullshitPercentage) {
      chrome.browserAction.setBadgeText({
        text: visitingPage.currentBullshitPercentage.toString()
      });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '' });
  }
});
