diaMaterial.setBusy(false);

var materialData = modelMultiModelSEARCH_MATERIAL.oData.result.IT_MATERIAL;

modeltabMaterial.setData(materialData);

toolMaterialTitle.setText("Materials" + " (" + modeltabMaterial.oData.length + ")");