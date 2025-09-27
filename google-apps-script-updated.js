function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var firstName = e.parameter.first_name;
  var lastName = e.parameter.last_name;
  var phone = e.parameter.phone;
  var guests = e.parameter.guests;
  var notes = e.parameter.notes;
  var attendance = e.parameter.attendance; // Changed from rsvp to attendance to match memory requirement
  
  try {
    sheet.appendRow([firstName, lastName, phone, guests, notes, attendance, new Date()]);
    
    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "3600"
      });
  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString())
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "3600"
      });
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("")
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "3600"
    });
}

function doGet(e) {
  return ContentService
    .createTextOutput('RSVP Script is running')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "3600"
    });
}