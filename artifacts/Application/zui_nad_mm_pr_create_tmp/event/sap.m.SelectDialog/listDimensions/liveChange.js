var binding = oEvent.getParameter("itemsBinding");
var value = oEvent.getParameter("value");
var filter = new sap.ui.model.Filter("MSEHL", "Contains", value);

binding.filter([filter]);
