var editData = ModelData.FindFirst(prEdit, "PREQ_NO", selectedPR, "EQ");

var itPRItems = editData.IT_PR_ITEMS;
var waPRHeader = editData.WA_PR_HEADER;

modelpageEdit.setData(waPRHeader);
informEditInfoBSART.setSelectedKey(waPRHeader.DOC_TYPE);
modeltabPRItems.setData(itPRItems);

modellistEditText.setData(modellistText.oData);
barEditText.setCount(modellistEditText.oData.length);
calcOrderHeader();

toolEditItemsAdd.setEnabled(false);
butItemAdd.setEnabled(false);

oApp.toDetail(pageEdit);