function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    
    // Check if this is an bulk upload request
    if (payload.action === "uploadVoters") {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registered_Voters");
      
      // 1. Clear existing data (except the headers on Row 1)
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
      }
      
      // 2. Append the new data rows sent from GitHub Pages
      var rowsToAppend = payload.data; // Expecting an array of arrays [[id, name, email...], [...]]
      if (rowsToAppend.length > 0) {
        sheet.getRange(2, 1, rowsToAppend.length, rowsToAppend[0].length).setValues(rowsToAppend);
      }
      
      return ContentService.createTextOutput(JSON.stringify({ success: true, message: rowsToAppend.length + " voters uploaded successfully!" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}