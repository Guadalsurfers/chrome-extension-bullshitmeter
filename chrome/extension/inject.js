window.addEventListener('load', () => {
  const port = chrome.runtime.connect({ name: 'parsing_channel' });
  port.postMessage({ test: 'foo' });
  port.onMessage.addListener((msg) => {
    console.log('received message in content ', msg);
  });
});
