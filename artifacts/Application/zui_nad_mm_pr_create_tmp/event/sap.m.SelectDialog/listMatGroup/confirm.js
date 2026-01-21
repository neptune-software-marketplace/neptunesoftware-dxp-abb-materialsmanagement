var selectedItem = oEvent.getParameter("selectedItem");
var context = selectedItem.getBindingContext();

modelpageItem.oData.MAT_GRP = context.getProperty("MATKL");
modelpageItem.oData.MAT_GRP_TXT = context.getProperty("WGBEZ");
modelpageItem.refresh();
