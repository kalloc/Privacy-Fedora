/* 

INSERT WHATEVER GOES HERE


*/

// On install, or update.
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.local.get(null, function(items) {
        //If random variable is undefined, assume all variables are undefined and set defaults.
        if (items.setPrefetching == undefined) { //Not undefined in cases of update.
            chrome.storage.local.set({
                setPrefetching: true,
                setHyperlinkAuditing: true,
                setHotwordSearch: true,
                setNavigationErrorHelper: true,
                setSearchSuggest: true,
                setSafeBrowsingReporting: true,
                setSafeBrowsing: false,
                setSpellcheck: true,
                setTranslation: false,
                setWebRTC: false,
                functHistory: false,
				preferedLocation: 'ask'
            }, function() {
                chrome.storage.local.get(null, function(items) {
                    chrome.privacy.network.networkPredictionEnabled.set({
                        value: !items.setPrefetching,
                        scope: 'regular'
                    });
                    chrome.privacy.websites.hyperlinkAuditingEnabled.set({
                        value: !items.setHyperlinkAuditing,
                        scope: 'regular'
                    });
                    chrome.privacy.services.hotwordSearchEnabled.set({
                        value: !items.setHotwordSearch,
                        scope: 'regular'
                    });
                    chrome.privacy.services.alternateErrorPagesEnabled.set({
                        value: !items.setNavigationErrorHelper,
                        scope: 'regular'
                    });
                    chrome.privacy.services.searchSuggestEnabled.set({
                        value: !items.setSearchSuggest,
                        scope: 'regular'
                    });
                    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({
                        value: !items.setSafeBrowsingReporting,
                        scope: 'regular'
                    });
                    chrome.privacy.services.safeBrowsingEnabled.set({
                        value: !items.setSafeBrowsing,
                        scope: 'regular'
                    });
                    chrome.privacy.services.spellingServiceEnabled.set({
                        value: !items.setSpellcheck,
                        scope: 'regular'
                    });
                    chrome.privacy.services.translationServiceEnabled.set({
                        value: !items.setTranslation,
                        scope: 'regular'
                    });
                    chrome.privacy.network.webRTCMultipleRoutesEnabled.set({
                        value: !items.setWebRTC,
                        scope: 'regular'
                    });
					chrome.contentSettings.location.set({
					setting: items.preferedLocation,
					primaryPattern: '<all_urls>',
					scope: 'regular'
    });
                    chrome.runtime.openOptionsPage()
                });
            })
        }
    });
});

chrome.storage.local.get(null, function(items) {
    chrome.privacy.network.networkPredictionEnabled.set({
        value: !items.setPrefetching,
        scope: 'regular'
    });
    chrome.privacy.websites.hyperlinkAuditingEnabled.set({
        value: !items.setHyperlinkAuditing,
        scope: 'regular'
    });
    chrome.privacy.services.hotwordSearchEnabled.set({
        value: !items.setHotwordSearch,
        scope: 'regular'
    });
    chrome.privacy.services.alternateErrorPagesEnabled.set({
        value: !items.setNavigationErrorHelper,
        scope: 'regular'
    });
    chrome.privacy.services.searchSuggestEnabled.set({
        value: !items.setSearchSuggest,
        scope: 'regular'
    });
    chrome.privacy.services.safeBrowsingExtendedReportingEnabled.set({
        value: !items.setSafeBrowsingReporting,
        scope: 'regular'
    });
    chrome.privacy.services.safeBrowsingEnabled.set({
        value: !items.setSafeBrowsing,
        scope: 'regular'
    });
    chrome.privacy.services.spellingServiceEnabled.set({
        value: !items.setSpellcheck,
        scope: 'regular'
    });
    chrome.privacy.services.translationServiceEnabled.set({
        value: !items.setTranslation,
        scope: 'regular'
    });
    chrome.privacy.network.webRTCMultipleRoutesEnabled.set({
        value: !items.setWebRTC,
        scope: 'regular'
    });
	chrome.contentSettings.location.set({
		setting: items.preferedLocation,
        primaryPattern: '<all_urls>',
        scope: 'regular'
    });
    //alert(items.testItem); Test alert
});


//Most memory efficent solution. Confirmed working.
chrome.storage.local.get('functHistory', function(history) {
    if (history.functHistory) {		//If condition is met, add history listener.
        chrome.history.onVisited.addListener(function(historyItem) {
            chrome.history.deleteUrl({
                "url": historyItem.url
            });
        });
    }
});