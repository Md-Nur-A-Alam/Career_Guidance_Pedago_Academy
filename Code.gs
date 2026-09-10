/**
 * ==============================================================================
 * PEDAGO ACADEMY - CAREER GUIDANCE (JOHN HOLLAND RIASEC MODEL)
 * Backend Google Apps Script (Web App)
 * ==============================================================================
 *
 * SPREADSHEET SCHEMA (Sheet1):
 * Column A: Timestamp
 * Column B: Name (Student Name)
 * Column C: Mobile
 * Column D: Student_Age
 * Column E: Guardian_Name
 * Column F: Student_Class
 * ==============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  
  try {
    lock.waitLock(30000);
  } catch (err) {
    return createJsonResponse({
      result: "error",
      message: "Server is currently busy. Please try again in a few moments."
    });
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        result: "error",
        message: "No data received in request."
      });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return createJsonResponse({
        result: "error",
        message: "Invalid JSON payload: " + parseError.toString()
      });
    }

    var studentName = (data.studentName || data.name || "").toString().trim();
    var parentName = (data.parentName || "").toString().trim();
    var mobile = (data.mobile || "").toString().trim();
    var studentAge = (data.studentAge || "").toString().trim();
    var studentClass = (data.studentClass || "").toString().trim();

    if (!studentName || !mobile || !studentAge) {
      return createJsonResponse({
        result: "error",
        message: "Missing required fields (Student Name, Mobile, or Student Age)."
      });
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName("Sheet1");
    if (!sheet) {
      sheet = spreadsheet.getSheets()[0];
    }

    // Ensure header row has Column E (Guardian_Name) & Column F (Student_Class) if needed
    if (sheet.getLastColumn() < 6) {
      var headers = sheet.getRange(1, 1, 1, 6).getValues()[0];
      if (!headers[4]) sheet.getRange(1, 5).setValue("Guardian_Name");
      if (!headers[5]) sheet.getRange(1, 6).setValue("Student_Class");
    }

    var timestamp = new Date();

    // Append row matching schema
    sheet.appendRow([
      timestamp,
      studentName,
      mobile,
      studentAge,
      parentName,
      studentClass
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
    lock.releaseLock();
  }
}

function doGet(e) {
  return createJsonResponse({
    status: "online",
    service: "Pedago Academy - Career Guidance RIASEC API",
    timestamp: new Date().toISOString()
  });
}

function createJsonResponse(dataObj) {
  return ContentService
    .createTextOutput(JSON.stringify(dataObj))
    .setMimeType(ContentService.MimeType.JSON);
}
