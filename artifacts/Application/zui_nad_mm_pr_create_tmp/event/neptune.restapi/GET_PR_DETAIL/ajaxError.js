var detailData = ModelData.FindFirst(prListDetail, "PREQ_NO", selectedPR, "EQ");

modelpageDetail.setData(detailData);

barDetailAttachment.setCount(0);
barDetailText.setCount(0);
butChange.setEnabled(true);
butDelete.setEnabled(true);

// Show/Hide Release Strategy
if (modeltabStrategy.oData.length) {
    panStrategy.setVisible(true);
} else {
    panStrategy.setVisible(false);
}

oApp.toDetail(pageDetail);