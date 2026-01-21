diaMaterial.setBusy(true);
// getOnlinediaMaterial();

var options = {
    parameters: {
        $select: "", // Optional
        "sap-client": "", // Required
    },
    data: {
        WA_MAT_SEARCH: modeldiaMaterial.oData,
    },
};

apiSEARCH_MATERIAL(options);