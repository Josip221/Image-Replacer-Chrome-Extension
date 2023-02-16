chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  switch (request.action) {
    case 'SHOWBG':
      chrome.tabs.query(
        {
          active: true,
          lastFocusedWindow: true,
        },
        function (tabs) {
          console.log(tabs[0].id);
          chrome.tabs.sendMessage(tabs[0].id, { action: 'SHOW' });
        }
      );

      break;
    case 'HIDE':
      console.log('disable');
      break;
  }
  console.log(request.action);
});

const getCurrentTabId = async () => {
  return;
};
