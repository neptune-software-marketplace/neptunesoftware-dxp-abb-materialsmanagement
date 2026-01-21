const binding = MasterList.getBinding("items");
const filter = new sap.ui.model.Filter({
  filters: [
    new sap.ui.model.Filter("BANFN", "Contains", this.getValue()),
    new sap.ui.model.Filter("TXZ01", "Contains", this.getValue()),
  ],
  and: false,
});
binding.filter([filter]);