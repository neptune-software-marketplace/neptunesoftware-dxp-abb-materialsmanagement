MasterList.setData();

var options = {
  saml2: "disabled", // Required - In Path
  parameters: {
    $select: "", // Optional
    "sap-client": "", // Required
    $RFCDEST: "", // Optional
  },
};

apiGET_PR_LIST(options);