# Waitlist → Google Sheet

The waitlist form POSTs each signup as JSON to `WAITLIST_WEBHOOK_URL`.
To collect signups in a Google Sheet:

1. Create a Google Sheet. In row 1 add the headers:
   `createdAt | name | contact | role | community`
2. In the sheet, open **Extensions → Apps Script**, replace the code with:

   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
     sheet.appendRow([data.createdAt, data.name, data.contact, data.role, data.community]);
     return ContentService.createTextOutput("ok");
   }
   ```

3. Click **Deploy → New deployment → Web app**.
   Execute as: **Me**. Who has access: **Anyone**. Deploy and copy the web app URL.
4. Set `WAITLIST_WEBHOOK_URL` to that URL in `.env.local` (local) and in
   Vercel → Project → Settings → Environment Variables (production).

Without the variable, signups are only logged to the terminal in development,
and the form shows an error in production.
