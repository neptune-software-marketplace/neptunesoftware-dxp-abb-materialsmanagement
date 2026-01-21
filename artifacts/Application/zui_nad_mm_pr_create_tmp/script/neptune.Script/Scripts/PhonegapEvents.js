// Back button handler
function onBackButtonCustom() {

    if (sap.ui.Device.system.phone) {

        switch (oApp.getCurrentPage().getId()) {

            case "pageList":
                AppCache.Back();
                break;

            default:
                oApp.backDetail();
        }
    } else {
        AppCache.Back();
    }

}
