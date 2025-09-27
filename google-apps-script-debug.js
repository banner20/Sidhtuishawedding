function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Debug: Log all parameters received
    console.log("=== GOOGLE APPS SCRIPT DEBUG ===");
    console.log("All parameters:", e.parameter);
    console.log("First name:", e.parameter.first_name);
    console.log("Last name:", e.parameter.last_name);
    console.log("Phone:", e.parameter.phone);
    console.log("Attendance:", e.parameter.attendance);
    console.log("Guests:", e.parameter.guests);
    console.log("Notes:", e.parameter.notes);
    console.log("=== END DEBUG ===");
    
    var firstName = e.parameter.first_name;
    var lastName = e.parameter.last_name;
    var phone = e.parameter.phone;
    var guests = e.parameter.guests;
    var notes = e.parameter.notes;
    var attendance = e.parameter.attendance; // "Yes" or "No"

    sheet.appendRow([firstName, lastName, phone, guests, notes, attendance, new Date()]);

    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  } catch(error) {
    console.log("Error in doPost:", error);
    return ContentService.createTextOutput("Error: " + error.message)
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("Access-Control-Allow-Methods", "POST")
      .setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
}

// Handle the CORS preflight OPTIONS request
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
