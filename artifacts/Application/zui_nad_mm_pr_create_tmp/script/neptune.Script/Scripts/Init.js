// Init
sap.ui.getCore().attachInit(function () {
    setTimeout(function () {
        inFilterList.rerender();
        // pullUpdate.setVisible(sap.ui.Device.support.touch);

        // Trigger Update at start

        // apiGET_PR_LIST();
    }, 200);

    oApp.setBusy(true);
    // apiGET_PR_LIST();
    
    // diaDemoGuide.open();
});

// New Comment

// Launchpad Navigation
if (typeof AppCache === "undefined") {
    butBackList.setVisible(false);
}
