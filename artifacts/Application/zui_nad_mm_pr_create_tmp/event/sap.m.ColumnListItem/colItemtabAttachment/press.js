// Get Selected Row
var context = oEvent.oSource.getBindingContext();
var value = context.getProperty("INSTID_B");
var filename = context.getProperty("DOCDES");
var ext = context.getProperty("FILE_EXT");

if (window.cordova) {
    getOnlineAttachment(value + "|" + filename + "." + ext);
} else {

    if (sap.n.Launchpad) {
        var src = window.location.origin + window.location.pathname + '/' + sap.n.currentView.sViewName + "?key_id=GET_ATTACHMENT&key=" + value + "|" + filename + "." + ext;
    } else {
        var src = window.location.href + "&key_id=GET_ATTACHMENT&key=" + value + "|" + filename + "." + ext;
    }

    window.open(src);
}
