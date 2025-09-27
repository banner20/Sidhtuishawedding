// Updated Google Apps Script code for handling RSVP form submissions
// Copy this code to your Google Apps Script project

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var firstName = e.parameter.first_name;
  var lastName = e.parameter.last_name;
  var phone = e.parameter.phone;
  var guests = e.parameter.guests;
  var notes = e.parameter.notes;
  var rsvp = e.parameter.attendance; // Changed from "rsvp" to "attendance" to match frontend
  sheet.appendRow([firstName, lastName, phone, guests, notes, rsvp, new Date()]);
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('RSVP Script is running')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*");
}
