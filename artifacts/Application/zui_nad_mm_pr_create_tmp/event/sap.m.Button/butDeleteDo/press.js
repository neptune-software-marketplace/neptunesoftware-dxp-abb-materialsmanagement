// oApp.setBusy(true);
//CTA
diaDelete.close();

oApp.toDetail(oPageStart);

ModelData.Delete(modelMultiModelGET_PR_LIST.oData.result.IT_PR_LIST, "BANFN", modelpageDetail.oData.PREQ_NO, "EQ");

MasterList.removeAllItems();

modelMasterList.setData(modelMultiModelGET_PR_LIST.oData.result.IT_PR_LIST);
modelMasterList.refresh();