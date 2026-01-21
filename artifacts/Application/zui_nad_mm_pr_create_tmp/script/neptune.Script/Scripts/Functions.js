var currItem;
var gSelectedItem;
var showMessage = false;

function toggleMaterial(state) {

    if (!state) {
        butMatnrSelection.setSelectedButton(butMatnrYes);
    } else {
        butMatnrSelection.setSelectedButton(butMatnrNo);
    }

    frmItemInfoMATERIAL.setEnabled(!state);
    frmItemInfoSHORT_TEXT.setEnabled(state);
    frmItemInfoUNIT.setEnabled(state);
    frmItemInfoMATKL.setEnabled(state);
    frmItemInfoC_AMT_BAPI.setEnabled(state);

}

function setHeaderText() {

    if (modelMasterList.oData.length) {
        lblpageListTitle.setText(txtTranslateHeader.getText() + " (" + modelMasterList.oData.length + ")");
    } else {
        lblpageListTitle.setText(txtTranslateHeader.getText());

        if (!sap.ui.Device.system.phone) {
            oApp.backDetailToPage(oPageStart);
        }

        MasterList.removeSelections();
    }

}

function calcOrderHeader() {

    var total = 0;
    $.each(modeltabPRItems.oData, function(i, data) {
        if (typeof data.C_AMT_BAPI !== 'undefined') {
            total = parseInt(data.QUANTITY) * parseFloat(data.C_AMT_BAPI);
        }
        objectHeaderEdit.setNumberUnit(data.CURRENCY);
    });

    jQuery.sap.require("sap.ui.core.format.NumberFormat");
    var oNumberFormat = sap.ui.core.format.NumberFormat.getFloatInstance({
        maxFractionDigits: 2,
        minFractionDigits: 2,
        groupingEnabled: true,
        groupingSeparator: " ",
        decimalSeparator: ","
    });

    if (modelpageItem.oData.C_AMT_BAPI && modelpageItem.oData.QUANTITY) {
        modelpageItem.oData.NETWR = parseInt(modelpageItem.oData.QUANTITY) * parseFloat(modelpageItem.oData.C_AMT_BAPI);
        modelpageItem.refresh();
    }

    var totalF = oNumberFormat.format(total);
    objectHeaderEdit.setNumber(totalF);

}


function afterDataLoadedAjax() {

    oApp.setBusy(false);

    if (showMessage) {
        jQuery.sap.require("sap.m.MessageToast");
        sap.m.MessageToast.show(txtTranslateUpdated.getText());
    }

    // pullUpdate.hide();
    setHeaderText();
    updateTileMenu();
    showMessage = true;

}

// Update Tile Counter in Menu
function updateTileMenu() {

    if (sap.n && sap.n.Launchpad) {
        var rec = {};
        rec.APPLID = 'ZUI_NAD_MM_PR_CREATE';
        rec.TILE_VALUECOLOR = 'Good';
        rec.TILE_NUMBER = modelMasterList.oData.length;
        rec.TILE_UNIT = txtTranslateUnit.getText();
        sap.n.Launchpad.UpdateTileInfo(rec);
    }

}

function removeLeadingZeros(arg) {
  const stringText = arg.toString();
  return stringText.replace(/^0+/, "");
}
