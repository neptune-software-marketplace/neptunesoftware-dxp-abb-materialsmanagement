toolEditItemsAdd.setEnabled(true);
butItemAdd.setEnabled(true);

modelpageEdit.setData(modelMultiModelADD.oData.result.WA_PR_HEADER);
modeltabPRItems.setData([]);
informEditInfoBSART.setSelectedKey(modelMultiModelADD.oData.result.WA_PR_HEADER.DOC_TYPE);
oApp.toDetail(pageEdit);

calcOrderHeader();
oApp.setBusy(false);