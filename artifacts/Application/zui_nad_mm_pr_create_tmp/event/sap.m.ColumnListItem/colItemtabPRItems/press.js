var context = oEvent.oSource.getBindingContext();
modelpageItem.setData(context.getObject());

// Save Item Index
currItem = parseInt(context.sPath.replace(/^\/|\/$/g, ''));

calcOrderHeader();

// Navigate
oApp.toDetail(pageItem);
