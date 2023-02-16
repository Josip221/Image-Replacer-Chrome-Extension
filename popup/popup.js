console.log('Running popup script');

const enableBtn = document.getElementById('enableBtn');

enableBtn.addEventListener('click', async () => {
  chrome.runtime.sendMessage({ action: 'SHOWBG' });
});
