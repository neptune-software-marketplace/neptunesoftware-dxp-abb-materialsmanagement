var selectedItem = oEvent.getParameter("selectedItem");
var context = selectedItem.getBindingContext();

modelpageItem.oData.UNIT = context.getProperty("MSEHI");
modelpageItem.refresh();
