diaCost.setBusy(true);
// getOnlinediaCost();
var options = {
    parameters: {
        $select: "", // Optional
        "sap-client": "", // Required
    },
    data: {
        WA_COST_SEARCH: modeldiaCost.oData,
    },
};

apiSEARCH_COSTCENTER(options);