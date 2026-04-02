var context = oEvent.oSource.getBindingContext();
var doc = context.getProperty("BANFN");
var pos = context.getProperty("BNFPO");

selectedPR = doc;
// gSelectedItem = selectedItem;
// getOnlinepageDetail(doc + ":" + pos);
//debugger
var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    AJAX_VALUE: doc + ":" + pos, // Required
  },
};

apiGET_PR_DETAIL(options);