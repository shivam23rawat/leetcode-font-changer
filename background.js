chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'open-about',
    title: 'LeetCode Font Changer: About',
    contexts: ['action']
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === 'open-about') {
    if (chrome.runtime.openOptionsPage) {
      chrome.runtime.openOptionsPage();
    } else {
      chrome.tabs.create({ url: chrome.runtime.getURL('options.html') });
    }
  }
});
