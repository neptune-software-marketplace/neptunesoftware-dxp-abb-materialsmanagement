diaCost.setBusy(false);

var costCenterData = modelMultiModelSEARCH_COSTCENTER.oData.result.IT_CSKT;
modeltabCost.setData(costCenterData);

toolCostTitle.setText("Cost Center" + " (" + modeltabCost.oData.length + ")");

var costCenterStruc = modelMultiModelSEARCH_COSTCENTER.oData.result.WA_COST_SEARCH;
modeldiaCost.setData(costCenterStruc);