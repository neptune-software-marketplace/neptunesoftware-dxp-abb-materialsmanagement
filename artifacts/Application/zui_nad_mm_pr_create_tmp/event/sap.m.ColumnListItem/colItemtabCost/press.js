var context = oEvent.oSource.getBindingContext();
var kostl = context.getProperty("KOSTL");
var stringText = kostl.toString();
modelpageItem.oData.COST_CTR = stringText.replace(/^0+/, '');
modelpageItem.oData.COST_CTR_TXT = context.getProperty("LTEXT");
modelpageItem.refresh();
diaCost.close();
