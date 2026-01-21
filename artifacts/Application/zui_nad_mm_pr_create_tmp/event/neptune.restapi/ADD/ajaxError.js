toolEditItemsAdd.setEnabled(true);
butItemAdd.setEnabled(true);

modelpageEdit.setData(prHeaderAdd);
modeltabPRItems.setData([]);
informEditInfoBSART.setSelectedKey(prHeaderAdd.DOC_TYPE);
oApp.toDetail(pageEdit);

calcOrderHeader();
oApp.setBusy(false);