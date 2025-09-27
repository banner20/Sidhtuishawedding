function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Log everything received
    console.log("=== RECEIVED PARAMETERS ===");
    console.log("All parameters:", JSON.stringify(e.parameter));
    console.log("Attendance parameter:", e.parameter.attendance);
    console.log("First name:", e.parameter.first_name);
    console.log("Last name:", e.parameter.last_name);
    console.log("=== END PARAMETERS ===");
    
    // Simple test - just append what we received
    var firstName = e.parameter.first_name || "NO_FIRST_NAME";
    var lastName = e.parameter.last_name || "NO_LAST_NAME";
    var phone = e.parameter.phone || "NO_PHONE";
    var guests = e.parameter.guests || "NO_GUESTS";
    var notes = e.parameter.notes || "NO_NOTES";
    var attendance = e.parameter.attendance || "NO_ATTENDANCE";

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

function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}
