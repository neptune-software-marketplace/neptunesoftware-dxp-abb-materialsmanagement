if (!sap.n) {
    sap.n = {};
}

sap.n.Office = {};

// ---------------------------------------------------
// Common functions
// ---------------------------------------------------
sap.n.Office.MakeBinary = function(dataBase64) {

    var raw = window.atob(dataBase64);
    var rawLength = raw.length;

    var array = new Uint8Array(rawLength);
    for (i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
    }
    return array;

}

// ---------------------------------------------------
// Open mobile native Office
// ---------------------------------------------------
sap.n.Office.NativeOpen = function(data, filename, type) {


    sap.n.Office.Filename = filename;
    sap.n.Office.Type = type;


    // Set Directory
    switch (sap.ui.Device.os.name) {

        case 'Android':
            sap.n.Office.NativeDir = cordova.file.externalCacheDirectory;
            break;

        case 'iOS':
            sap.n.Office.NativeDir = cordova.file.tempDirectory;
            break;

        case 'winphone':
            sap.n.Office.NativeDir = cordova.file.externalCacheDirectory;
            break;

        default:
            break;

    }

    // Create Array
    sap.n.Office.Data = data;

    window.resolveLocalFileSystemURL(sap.n.Office.NativeDir, function(dir) {
        dir.getFile("excelFile.xlsx", {
            create: true
        }, function(file) {
            sap.n.Office.NativeWriteLog(file);
        });
    });

}

sap.n.Office.NativeWriteLog = function(file) {

    file.createWriter(function(fileWriter) {

        fileWriter.onwriteend = function(e) {

            cordova.plugins.fileOpener2.open(
                sap.n.Office.NativeDir + "excelFile.xlsx",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", {
                    error: function(e) {
                        console.log('Error open: ' + e.status + ' - Error message: ' + e.message);
                    }
                }
            );

        };

        fileWriter.onerror = function(e) {
            alert("Error: " + e);
        };

        fileWriter.write(sap.n.Office.Data);

    }, sap.n.Office.NativeWriteFail);
}

sap.n.Office.NativeWriteFail = function(e) {
    alert('Error write: ' + e.status + ' - Error message: ' + e.message);
}
