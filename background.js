chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    const targetDomain = "127.0.0.1";
    const targetPort = "35001";

    if (finishedLoading()) {
        const url = new URL(tab.url);

        if (url.hostname.includes(targetDomain) && url.port === targetPort) {
            chrome.tabs.remove(tabId);
        }
    }

    function finishedLoading() {
        return changeInfo.status === 'complete';
    }

});
