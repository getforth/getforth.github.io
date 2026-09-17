const tabs = [...document.querySelectorAll('[role="tab"]')];

function selectTab(nextTab, moveFocus = false) {
  for (const tab of tabs) {
    const selected = tab === nextTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }
  if (moveFocus) nextTab.focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', (event) => {
    let nextIndex;
    if (event.key === 'ArrowDown') nextIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex !== undefined) {
      event.preventDefault();
      selectTab(tabs[nextIndex], true);
    }
  });
});

const userAgent = navigator.userAgent;
const isTikTok = /TikTok|musical_ly|BytedanceWebview|trill/i.test(userAgent);
// Some iOS in-app browsers omit their app name and the Safari identifier.
const isIOSWebView = /iPhone|iPad|iPod/.test(userAgent)
  && /AppleWebKit/.test(userAgent)
  && !/Safari|CriOS|FxiOS|EdgiOS/.test(userAgent);
const downloadPage = document.getElementById('download-page');

if (downloadPage) {
  const status = document.getElementById('download-status');
  const appStoreLink = document.getElementById('app-store-link');
  document.getElementById('browser-help').hidden = true;

  if (/Android/i.test(userAgent)) {
    status.textContent = 'Forth is currently available for iPhone.';
    appStoreLink.textContent = 'View on the App Store';
  } else if (isTikTok || isIOSWebView) {
    status.textContent = 'Tap the three dots at the top, then choose Open in browser to continue to the App Store.';
    appStoreLink.hidden = true;
  } else {
    status.textContent = 'Opening the App Store. If it doesn’t open, tap below.';
    window.location.replace(appStoreLink.href);
  }
} else if (isTikTok) {
  document.querySelectorAll('.download-link').forEach((link) => {
    link.href = './download/';
  });
}
