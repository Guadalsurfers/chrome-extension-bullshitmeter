window.addEventListener('load', () => {
  chrome.extension.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.message.type !== 'PLEASE_GRAB_DOM') return;

    const selectors = msg.message.payload.selectors;

    sendResponse({
      message: {
        type: 'HERE_DOM',
        payload: {
          results: selectors.map((sel) => {
            const nodeList = document.querySelectorAll(sel.selector);
            const nodesArray = Array.prototype.slice.call(nodeList);
            return nodesArray.map(node => node[sel.property]);
          })
        },
      },
    });
  });
});
