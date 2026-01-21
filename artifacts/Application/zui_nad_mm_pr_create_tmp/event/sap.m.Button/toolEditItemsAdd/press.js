// Add New Empty
var dataItem = {};
dataItem.PREQ_NO = modelpageEdit.oData.PREQ_NO;
dataItem.PREQ_ITEM = (modeltabPRItems.oData.length + 1) * 10;
dataItem.PREQ_ITEM = dataItem.PREQ_ITEM.toString();
dataItem.MATERIAL = "";
ModelData.Add(tabPRItems, dataItem);

currItem = modeltabPRItems.oData.length - 1;

oApp.toDetail(pageItem);
modelpageItem.setData(dataItem);
barItem.setSelectedItem(barItemInfo);
