function sendThankYouEmail() {
  const formResponsesSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = formResponsesSheet.getDataRange();
  const data = dataRange.getValues();

  const lastRowIndex = dataRange.getLastRow();
  const lastResponse = data[lastRowIndex - 1];

  const name = lastResponse[1]; 
  const email = lastResponse[2]; 

  const subject = "फारम पेश गर्नुभएकोमा धन्यवाद!!!";
  const body = "Dear ${name},\n\फारम भर्दिनु भएकोमा धन्यबाद ☻☻☻.\n\nBest regards,\nAngel Maharjan";

  MailApp.sendEmail(email, subject, body);
  Logger.log(email, subject, body)
}