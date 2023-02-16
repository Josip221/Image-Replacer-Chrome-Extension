console.log('content');

const generateRandomId = (maximum, minimum) => {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

HTMLCollection.prototype.forEach = Array.prototype.forEach;
NodeList.prototype.forEach = Array.prototype.forEach;

const images = document.getElementsByTagName('img');

images.forEach(image => {
  image.src = chrome.runtime.getURL(`../src/${generateRandomId(31, 1)}.jpg`);
  image.style.objectFit = 'contain';
});

console.log('Running content script');
// (async () => {
//   const response = await chrome.runtime.sendMessage({
//     test: 'Hello from content js',
//   });
//   console.log(response);
// })();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.action) {
    case 'SHOW':
      console.log('show zenta');
      break;
    case 'HIDE':
      console.log('hide zenta');
  }
});
