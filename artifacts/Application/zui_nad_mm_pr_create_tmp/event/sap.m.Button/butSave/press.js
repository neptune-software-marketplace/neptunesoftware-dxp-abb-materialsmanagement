oApp.setBusy(true);

var options = {
    saml2: "disabled", // Required - In Path
    parameters: {
        $select: "", // Optional
        "sap-client": "", // Required
        $RFCDEST: "", // Optional
    },
    data: {
        IT_PR_ITEMS: modeltabPRItems.oData,
        WA_PR_HEADER: modelpageEdit.oData,
    },
};

apiSAVE(options);

//CTA
// diaContactUs.open();
