var numItem = currItem + 1;

if (numItem < modeltabPRItems.oData.length) {
    currItem++;
    modelpageItem.setData(modeltabPRItems.oData[currItem]);
}

calcOrderHeader();
