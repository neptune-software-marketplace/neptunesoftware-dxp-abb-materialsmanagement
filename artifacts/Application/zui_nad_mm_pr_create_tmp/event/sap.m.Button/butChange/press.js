// getOnlinepageEdit(modelpageDetail.oData.PREQ_NO);

var options = {
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    AJAX_VALUE: modelpageDetail.oData.PREQ_NO, // Required
  },
};

apiGET_PR_EDIT(options);