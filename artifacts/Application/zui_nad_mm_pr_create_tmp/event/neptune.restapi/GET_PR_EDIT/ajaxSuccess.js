var itPRItems = modelMultiModelGET_PR_EDIT.oData.result.IT_PR_ITEMS;
var waPRHeader = modelMultiModelGET_PR_EDIT.oData.result.WA_PR_HEADER;

modelpageEdit.setData(waPRHeader);
informEditInfoBSART.setSelectedKey(waPRHeader.DOC_TYPE);
modeltabPRItems.setData(itPRItems);

modellistEditText.setData(modellistText.oData);
barEditText.setCount(modellistEditText.oData.length);
calcOrderHeader();

toolEditItemsAdd.setEnabled(false);
butItemAdd.setEnabled(false);

oApp.toDetail(pageEdit);