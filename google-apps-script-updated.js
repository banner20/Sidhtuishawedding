// Updated Google Apps Script code for handling RSVP form submissions
// Copy this code to your Google Apps Script project

function doPost(e) {
  try {
    // Log the incoming request to help identify duplicate submissions
    console.log('Received RSVP submission:', JSON.stringify(e.parameter));
    
    // Get the form data
    const data = e.parameter;
    
    // Open your Google Sheet (replace with your actual sheet ID)
    const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    
    // Add headers if this is the first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Phone', 'Attendance', 'Guests', 'Notes']);
    }
    
    // Add the data to the sheet
    sheet.appendRow([
      new Date(),
      data.first_name || '',
      data.last_name || '',
      data.phone || '',
      data.attendance || '',  // Added attendance parameter
      data.guests || '',
      data.notes || ''
    ]);
    
    // Log successful submission
    console.log('RSVP data successfully added to sheet');
    
    // Return success response
    return ContentService
      .createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}

function doGet(e) {
  // Handle GET requests (for testing)
  return ContentService
    .createTextOutput('RSVP Script is running')
    .setMimeType(ContentService.MimeType.TEXT);
}