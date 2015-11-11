// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript({
        file: 'jquery-1.11.1.min.js'
    });

    chrome.tabs.executeScript({
        file: 'wishbox.css'
    });

    chrome.tabs.executeScript({
        code: 'var item = { favIcon: "'+tab.favIconUrl+'", title: "'+tab.title+'", url: "'+tab.url+'",image: "",status: ""};'
    });

    chrome.tabs.executeScript({
        file: 'wishbox.js'
    });
});

