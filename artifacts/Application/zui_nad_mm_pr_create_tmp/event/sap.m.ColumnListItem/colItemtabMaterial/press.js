var context = oEvent.oSource.getBindingContext();

// New Item
if (!modelpageItem.oData.MATERIAL) {
    modelpageItem.oData.QUANTITY = 1;
    modelpageItem.oData.DELIV_DATE = context.getProperty("EINDT");
}

modelpageItem.oData.MATERIAL = context.getProperty("MATNR");
modelpageItem.oData.UNIT = context.getProperty("MEINS");
modelpageItem.oData.SHORT_TEXT = context.getProperty("MAKTX");
modelpageItem.oData.C_AMT_BAPI = context.getProperty("NETPR");
modelpageItem.oData.CURRENCY = context.getProperty("WAERS");
modelpageItem.refresh();

diaMaterial.close();

// Update Header
calcOrderHeader();
