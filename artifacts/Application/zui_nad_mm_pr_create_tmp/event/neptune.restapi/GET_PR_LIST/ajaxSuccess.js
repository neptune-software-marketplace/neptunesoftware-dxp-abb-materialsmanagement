oApp.setBusy(false);

modelMasterList.setData(modelMultiModelGET_PR_LIST.oData.result.IT_PR_LIST);
modelinformEditInfoBSART.setData(modelMultiModelGET_PR_LIST.oData.result.IT_T161T);

afterDataLoadedAjax();