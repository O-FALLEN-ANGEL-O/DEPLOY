const express = require('express');
const bodyParser = require('body-parser');
const loginRouter = require('./Routes/Login/Login.js');
const cors = require('cors');
const db = require('./db');
const invoiceRouter = require('./Routes/Invoice/Invoice.js');
const adminRouter = require('./Routes/Dashboard/Admindashboard.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/', loginRouter);
app.use('/', adminRouter);
app.use('/invoices', invoiceRouter);
// =============================== - EmployeeDashboard - ================================================

app.get('/schoolInfo/:employeeId', (req, res) => {
  const { employeeId } = req.params;
  const query = `SELECT * FROM college_information WHERE employeeid = '${employeeId}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching school info:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ data: result });
  });
});

app.get('/empdashboard/LeadInfo/:employeeId', (req, res) => {
  const { employeeId } = req.params;
  const query = `SELECT * FROM lead_information WHERE employeeid = '${employeeId}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching lead info:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    res.json({ data: result });
  });
});
// =============================== - EmployeeDashboard ends - ================================================
// =============================== - Invoices - ================================================
// Route to handle invoice creation
app.post('/invoices', (req, res) => {
  const {
    atlcode,
    paymentCategory,
    paymentSlab,
    date,
    amount,
    referenceNumber,
    year,
  } = req.body;

  // Convert date from "yyyy-MM-dd" to "dd-MM-yyyy"
  const formattedDate = formatDateToDDMMYYYY(date);

  // SQL query to insert invoice data into the database
  const sql = `
    INSERT INTO payment_details (
      atlcode,
      paymentCategory,
      paymentSlab,
      date,
      amount,
      referenceNumber,
      year
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    atlcode,
    paymentCategory,
    paymentSlab,
    formattedDate,
    amount,
    referenceNumber,
    year
  ];

  // Execute the query
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error creating invoice:', err);
      return res.status(500).json({ error: 'Failed to create invoice' });
    }

    console.log('Invoice created successfully');
    res.status(201).json({ message: 'Invoice created successfully', invoiceId: result.insertId });
  });
});


// Endpoint to save PDF data into the database
app.post('/savePdfData', (req, res) => {
  const {
    atlcode,
    year,
    paymentCategory,
    cash_inhand,
    interest,
    intpaid,
    granted,
    granted_date,
    total_avail_fund,
    expenditure,
    closing_balance,
  } = req.body;

  const sql = `
    INSERT INTO pdf(
      atlcode,
      year,
      paymentCategory,
      cash_inhand,
      interest,
      intpaid,
      granted,
      granted_date,
      total_avail_fund,
      expenditure,
      closing_balance
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    atlcode,
    year,
    paymentCategory,
    cash_inhand,
    interest,
    intpaid,
    granted,
    granted_date,
    total_avail_fund,
    expenditure,
    closing_balance,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error saving PDF data:', err);
      return res.status(500).json({ error: 'Failed to save PDF data' });
    }

    console.log('PDF data saved successfully');
    res.status(201).json({ message: 'PDF data saved successfully', pdfId: result.insertId });
  });
});



// Helper function to format date from "yyyy-MM-dd" to "dd-MM-yyyy"
const formatDateToDDMMYYYY = (dateString) => {
  const [year, month, day] = dateString.split('-');
  return `${day}-${month}-${year}`;
};

app.get('/payment_details/:atlcode', (req, res) => {
  const { atlcode } = req.params;
  const query = `SELECT * FROM payment_details WHERE atlcode = ?`;

  db.query(query, [atlcode], (err, results) => {
    if (err) {
      console.error('Error fetching payment details:', err);
      res.status(500).json({ error: 'Failed to fetch payment details' });
      return;
    }
    res.json(results);
  });
});

app.get('/invoices/:id', (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM payment_details WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching invoice details:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Invoice not found');
      return;
    }
    const invoiceDetails = results[0];
    res.json(invoiceDetails);
  });
});

app.get('/invoicemainpge/payment_details/grouped', (req, res) => {
  const query = 'SELECT DISTINCT atlcode FROM payment_details';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching grouped ATL codes:', err);
      res.status(500).json({ error: 'Failed to fetch grouped ATL codes' });
      return;
    }
    res.json(results);
  });
});

app.get('/invoicemainpge/payment_details/:atlcode', (req, res) => {
  const { atlcode } = req.params;
  const query = 'SELECT * FROM payment_details WHERE atlcode = ?';

  db.query(query, [atlcode], (err, results) => {
    if (err) {
      console.error(`Error fetching details for ATL code ${atlcode}:`, err);
      res.status(500).json({ error: `Failed to fetch details for ATL code ${atlcode}` });
      return;
    }
    res.json(results);
  });
});

// =============================== - Invoices ends - ================================================
// =============================== - SchoolDashboard - ================================================

app.get('/schooldashboard/schoolInfo/:atlcode', (req, res) => {
  const { atlcode } = req.params;
  const query = `SELECT * FROM college_information WHERE atlcode = ?`;

  db.query(query, [atlcode], (err, result) => {
    if (err) {
      console.error('Error fetching school information:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'No school information found for this ATL code' });
    } else {
      res.json({ data: result });
    }
  });
});

app.get('/schooldashboard/paymentDetails/:atlcode', (req, res) => {
  const { atlcode } = req.params;
  const query = `SELECT * FROM payment_details WHERE atlcode = ?`;

  db.query(query, [atlcode], (err, result) => {
    if (err) {
      console.error('Error fetching payment details:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'No payment details found for this ATL code' });
    } else {
      res.json({ data: result });
    }
  });
});

// Example backend route to handle school info update
app.post('/schooldashboard/updateSchoolInfo', async (req, res) => {
  const schoolId = req.params.id;
  const updatedSchoolInfo = req.body;

  // MySQL query to update school info
  const query = 'UPDATE college_information SET collegeName = ?, sanctionNo = ?, udise = ?, fromDate = ?, inaugurationDate = ?, principalName = ?, atlcode = ?, dashboardPassword = ?, gemcode = ?, gemPassword = ?, govtEmail = ?, govtMailPassword = ?, pfms = ?, pfmsPassword = ?, pfmsOP = ?, pfmsOPPassword = ?, pfmsAP = ?, pfmsAPPassword = ?, altIncharge = ?, altPhone = ?, registeredEmail = ?, registeredPhone = ?, bharatkosh = ?, bharatkoshPassword = ? WHERE id = ?';

  const values = [
    updatedSchoolInfo.collegeName,
    updatedSchoolInfo.sanctionNo,
    updatedSchoolInfo.udise,
    updatedSchoolInfo.fromDate,
    updatedSchoolInfo.inaugurationDate,
    updatedSchoolInfo.principalName,
    updatedSchoolInfo.atlcode,
    updatedSchoolInfo.dashboardPassword,
    updatedSchoolInfo.gemcode,
    updatedSchoolInfo.gemPassword,
    updatedSchoolInfo.govtEmail,
    updatedSchoolInfo.govtMailPassword,
    updatedSchoolInfo.pfms,
    updatedSchoolInfo.pfmsPassword,
    updatedSchoolInfo.pfmsOP,
    updatedSchoolInfo.pfmsOPPassword,
    updatedSchoolInfo.pfmsAP,
    updatedSchoolInfo.pfmsAPPassword,
    updatedSchoolInfo.altIncharge,
    updatedSchoolInfo.altPhone,
    updatedSchoolInfo.registeredEmail,
    updatedSchoolInfo.registeredPhone,
    updatedSchoolInfo.bharatkosh,
    updatedSchoolInfo.bharatkoshPassword,
    schoolId
  ];

  // Execute the query
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error updating school info:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      // Send back updated school info or success message
      res.status(200).json(updatedSchoolInfo);
    }
  });
});

// =============================== - SchoolDashboard Ends - ================================================
// =============================== - pdf Ends - ================================================

// Endpoint to save PDF data to the database
app.post('/savePdfData', async (req, res) => {
  const {
    atlcode,
    year,
    paymentCategory,
    cash_inhand,
    interest,
    intpaid,
    granted,
    granted_date,
    total_avail_fund,
    expenditure,
    closing_balance
  } = req.body;

  try {
    const query = `
      INSERT INTO pdf (atlcode, year, paymentCategory, cash_inhand, interest, intpaid, granted, granted_date, total_avail_fund, expenditure, closing_balance)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.query(query, [
      atlcode,
      year,
      paymentCategory,
      cash_inhand,
      interest,
      intpaid,
      granted,
      granted_date,
      total_avail_fund,
      expenditure,
      closing_balance
    ]);

    res.status(201).json({ message: 'PDF data saved successfully' });
  } catch (error) {
    console.error('Error saving PDF data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



// Endpoint to fetch closing_balance based on atlcode and year
app.get('/closing_balance', (req, res) => {
  const { atlcode, year } = req.query;
  const query = `SELECT closing_balance FROM pdf WHERE atlcode = ? AND year = ?`;

  db.query(query, [atlcode, year], (err, result) => {
    if (err) {
      console.error('Error fetching closing balance:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (result.length === 0) {
      res.status(404).json({ error: 'Closing balance not found for this ATL code and year' });
    } else {
      const closingBalance = result[0].closing_balance;
      res.json({ closing_balance: closingBalance });
    }
  });
});


// =============================== - pdf Ends - ================================================

// Route to handle form submission from React frontend
app.post('/leadform', (req, res) => {
  const {
    schoolBoard,
    leadsource,
    pincode,
    organizationname,
    address,
    in_group,
    state,
    city,
    fullname,
    landlineNumber,
    email,
    designation,
    phoneNumber,
    no_students,
    file, // This will be handled separately (not included in SQL query)
    close_date
  } = req.body;

  // SQL query to insert form data into the database
  const sql = `
    INSERT INTO lead_information (
      schoolBoard,
      leadsource,
      pincode,
      organizationname,
      address,
      in_group,
      state,
      city,
      fullname,
      landlineNumber,
      email,
      designation,
      phoneNumber,
      no_students,
      close_date
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    schoolBoard,
    leadsource,
    pincode,
    organizationname,
    address,
    in_group ? 1 : 0, // Convert boolean to integer for MySQL
    state,
    city,
    fullname,
    landlineNumber,
    email,
    designation,
    phoneNumber,
    no_students,
    close_date
  ];

  // Execute the SQL query
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into database:', err);
      return res.status(500).json({ error: 'Failed to submit form' });
    }

    console.log('Form data inserted successfully');
    res.status(201).json({ message: 'Form submitted successfully', employeeId: result.insertId });
  });
});



const PORT = process.env.PORT || 8801;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
