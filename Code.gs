/**
 * ==============================================================================
 * PEDAGO ACADEMY - CAREER GUIDANCE LEADS
 * Backend Google Apps Script (Web App)
 * ==============================================================================
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet ("Career_guidance_Leads") and go to Extensions → Apps Script.
 * 2. In the Apps Script editor, replace the content of "Code.gs" with this entire file.
 * 3. Click "Deploy" (top right) → "New deployment".
 * 4. Click the gear icon next to "Select type" and choose "Web app".
 * 5. Configure the deployment:
 *    - Description: "Career Guidance Leads Web App"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone" (allows public form submissions without login)
 * 6. Click "Deploy".
 * 7. Authorize access if prompted by Google.
 * 8. Copy the generated "Web app URL" (ends with /exec).
 * 9. Paste this URL into the `SCRIPT_URL` constant at the top of `script.js`.
 *
 * SPREADSHEET SCHEMA (Sheet1):
 * Column A: Timestamp
 * Column B: Name
 * Column C: Mobile
 * Column D: Student_Age
 * ==============================================================================
 */

/**
 * Handle incoming POST requests from the lead capture form.
 *
 * @param {Object} e - Event object containing POST request data.
 * @returns {TextOutput} JSON response indicating success or error.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  
  // Wait up to 30 seconds for concurrent requests to acquire the lock
  try {
    lock.waitLock(30000);
  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: "Server is currently busy. Please try again in a few moments."
    });
  }

  try {
    // Validate that request body exists
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        result: "error",
        message: "No data received in request."
      });
    }

    // Parse the JSON payload sent as text/plain
    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createJsonResponse({
        result: "error",
        message: "Invalid JSON payload: " + parseError.toString()
      });
    }

    // Sanitize and extract form values
    var name = (data.name || "").toString().trim();
    var mobile = (data.mobile || "").toString().trim();
    var studentAge = (data.studentAge || "").toString().trim();

    // Basic server-side validation
    if (!name || !mobile || !studentAge) {
      return createJsonResponse({
        result: "error",
        message: "Missing required fields (Name, Mobile, or Student Age)."
      });
    }

    // Access the active spreadsheet and target sheet tab
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Sheet1");

    // Fallback: use the first sheet if "Sheet1" is renamed
    if (!sheet) {
      sheet = spreadsheet.getSheets()[0];
    }

    // Generate server-side timestamp
    var timestamp = new Date();

    // Append row matching exact schema: [Timestamp, Name, Mobile, Student_Age]
    sheet.appendRow([
      timestamp,
      name,
      mobile,
      studentAge
    ]);

    return createJsonResponse({
      result: "success",
      message: "Lead recorded successfully."
    });

  } catch (error) {
    return createJsonResponse({
      result: "error",
      message: error.toString()
    });
  } finally {
    // Always release the lock
    lock.releaseLock();
  }
}

/**
 * Handle GET requests for health check and deployment verification.
 * Visiting the deployed Web App URL in a browser will return a confirmation.
 *
 * @param {Object} e - Event object.
 * @returns {TextOutput} JSON response confirming service is online.
 */
function doGet(e) {
  return createJsonResponse({
    status: "online",
    service: "Pedago Academy - Career Guidance Leads API",
    timestamp: new Date().toISOString()
  });
}

/**
 * Helper function to produce clean JSON TextOutput.
 *
 * @param {Object} dataObj - JavaScript object to serialize.
 * @returns {TextOutput} ContentService response with JSON MIME type.
 */
function createJsonResponse(dataObj) {
  return ContentService
    .createTextOutput(JSON.stringify(dataObj))
    .setMimeType(ContentService.MimeType.JSON);
}
