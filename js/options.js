function save_options() {
    var setPrefetching = document.getElementById('prefetching')
        .checked;
    var setHyperlinkAuditing = document.getElementById('hyperlinkaudit')
        .checked;
    var setHotwordSearch = document.getElementById('hotword')
        .checked;
    var setNavigationErrorHelper = document.getElementById('errornavigate')
        .checked;
    var setSearchSuggest = document.getElementById('searchsuggest')
        .checked;
    var setSafeBrowsingReporting = document.getElementById('safebrowsingreporting')
        .checked;
    var setSafeBrowsing = document.getElementById('safebrowsing')
        .checked;
    var setSpellcheck = document.getElementById('spellcheck')
        .checked;
    var setTranslation = document.getElementById('translation')
        .checked;
    var setWebRTC = document.getElementById('webrtc')
        .checked;
    var functHistory = document.getElementById('history')
        .checked;
	var location = document.getElementById('location').value;	
    chrome.storage.local.set({
        setPrefetching: setPrefetching,
        setHyperlinkAuditing: setHyperlinkAuditing,
        setHotwordSearch: setHotwordSearch,
        setNavigationErrorHelper: setNavigationErrorHelper,
        setSearchSuggest: setSearchSuggest,
        setSafeBrowsingReporting: setSafeBrowsingReporting,
        setSafeBrowsing: setSafeBrowsing,
        setSpellcheck: setSpellcheck,
        setTranslation: setTranslation,
        setWebRTC: setWebRTC,
        functHistory: functHistory,
		preferedLocation: location
    }, function() {});
    chrome.tabs.create({
        'url': "chrome://restart"
    });
}

function restore_options() {
    chrome.storage.local.get({
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
    }, function(items) {
        document.getElementById('prefetching')
            .checked = items.setPrefetching;
        document.getElementById('hyperlinkaudit')
            .checked = items.setHyperlinkAuditing;
        document.getElementById('hotword')
            .checked = items.setHotwordSearch;
        document.getElementById('errornavigate')
            .checked = items.setNavigationErrorHelper;
        document.getElementById('searchsuggest')
            .checked = items.setSearchSuggest;
        document.getElementById('safebrowsingreporting')
            .checked = items.setSafeBrowsingReporting;
        document.getElementById('safebrowsing')
            .checked = items.setSafeBrowsing;
        document.getElementById('spellcheck')
            .checked = items.setSpellcheck;
        document.getElementById('translation')
            .checked = items.setTranslation;
        document.getElementById('webrtc')
            .checked = items.setWebRTC;
        document.getElementById('history')
            .checked = items.functHistory;
		document.getElementById('location').value = items.preferedLocation;	
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save')
    .addEventListener('click',
        save_options);