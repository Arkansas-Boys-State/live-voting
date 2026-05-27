function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    
    if (payload.action === "uploadVoters") {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registered_Voters");
      
      // 1. Determine incoming data dimensions dynamically
      var incomingRows = payload.data;
      if (incomingRows.length === 0) {
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: "Uploaded file contains no data rows." }))
                             .setMimeType(ContentService.MimeType.JSON);
      }
      
      var incomingColumns = incomingRows[0].length; // This will dynamically detect 11 (or any number)
      
      // 2. Clear existing data below headers safely using the incoming data width
      if (sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, incomingColumns).clearContent();
      }
      
      // 3. Write the new data matrix to the sheet perfectly
      sheet.getRange(2, 1, incomingRows.length, incomingColumns).setValues(incomingRows);
      
      return ContentService.createTextOutput(JSON.stringify({ success: true, message: incomingRows.length + " voters uploaded successfully!" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}