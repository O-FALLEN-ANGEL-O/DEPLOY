const express = require('express');
const router = express.Router();
const db = require('../../db');

// ================================================================================================================
// =================================== --user details -- ==========================================================
// Read operation to fetch users
router.get("/users", (req, res) => {
  const q = "SELECT * FROM usertable";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Create operation for users
router.post("/users", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid } = req.body;
  const q = "INSERT INTO usertable (username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(201).json({ message: "User added successfully" });
  });
});

// Update operation for users
router.put("/users/:id", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid } = req.body;
  const { id } = req.params;
  const q = "UPDATE usertable SET username=?, password=?, firstName=?, lastName=?, role=?, email=?, phone=?, address=?, dateofjoining=?, atlcode=?, employeeid=? WHERE id=?";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "User updated successfully" });
  });
});
// Delete operation for users
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM usertable WHERE id=?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "User deleted successfully" });
  });
});
// ================================================================================================================
// =================================== -- School Infomation table  -- ==========================================================
// Read operation to fetch users
router.get("/SchoolInfo", (req, res) => {
  const q = "SELECT * FROM college_information ";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Create operation for users
router.post("/schoolInfo", (req, res) => {
  const { id, collegeName, sanctionNo, udise, fromDate, inaugurationDate, principalName, atlcode, dashboardPassword, gemcode, gemPassword, govtEmail, govtMailPassword, pfms, pfmsPassword, pfmsOP, pfmsOPPassword, pfmsAP, pfmsAPPassword, altIncharge, altPhone, registeredEmail, registeredPhone, bharatkosh, bharatkoshPassword } = req.body;
  const q = "INSERT INTO college_information (id, collegeName, sanctionNo, udise, fromDate, inaugurationDate, principalName, atlcode, dashboardPassword, gemcode, gemPassword, govtEmail, govtMailPassword, pfms, pfmsPassword, pfmsOP, pfmsOPPassword, pfmsAP, pfmsAPPassword, altIncharge, altPhone, registeredEmail, registeredPhone, bharatkosh, bharatkoshPassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [id, collegeName, sanctionNo, udise, fromDate, inaugurationDate, principalName, atlcode, dashboardPassword, gemcode, gemPassword, govtEmail, govtMailPassword, pfms, pfmsPassword, pfmsOP, pfmsOPPassword, pfmsAP, pfmsAPPassword, altIncharge, altPhone, registeredEmail, registeredPhone, bharatkosh, bharatkoshPassword], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "School created successfully" });
  });
});

// Update operation for users
router.put("/schoolInfo/:id", (req, res) => {
  const { id, collegeName, sanctionNo, udise, fromDate, inaugurationDate, principalName, atlcode, dashboardPassword, gemcode, gemPassword, govtEmail, govtMailPassword, pfms, pfmsPassword, pfmsOP, pfmsOPPassword, pfmsAP, pfmsAPPassword, altIncharge, altPhone, registeredEmail, registeredPhone, bharatkosh, bharatkoshPassword } = req.body;
  const { id: schoolId } = req.params;
  const q = "UPDATE college_information SET collegeName=?, sanctionNo=?, udise=?, fromDate=?, inaugurationDate=?, principalName=?, atlcode=?, dashboardPassword=?, gemcode=?, gemPassword=?, govtEmail=?, govtMailPassword=?, pfms=?, pfmsPassword=?, pfmsOP=?, pfmsOPPassword=?, pfmsAP=?, pfmsAPPassword=?, altIncharge=?, altPhone=?, registeredEmail=?, registeredPhone=?, bharatkosh=?, bharatkoshPassword=? WHERE id=?";
  db.query(q, [collegeName, sanctionNo, udise, fromDate, inaugurationDate, principalName, atlcode, dashboardPassword, gemcode, gemPassword, govtEmail, govtMailPassword, pfms, pfmsPassword, pfmsOP, pfmsOPPassword, pfmsAP, pfmsAPPassword, altIncharge, altPhone, registeredEmail, registeredPhone, bharatkosh, bharatkoshPassword, schoolId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "School updated successfully" });
  });
});

// Delete operation for users
router.delete(`/schoolInfo/:id`, (req, res) => {
  const { id: schoolId } = req.params;
  const q = "DELETE FROM college_information WHERE id=?";
  db.query(q, [schoolId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "School deleted successfully" });
  });
});
// ================================================================================================================
// =================================== -- Payment details -- ==========================================================
router.get('/admindashboard/paymenttable', (req, res) => {
  const q = 'SELECT * FROM payment_details';
  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ data });
  });
});

// POST create a new payment detail
router.post('/admindashboard/paymenttable', (req, res) => {
  const {
    atlcode,
    paymentCategory,
    paymentSlab,
    date,
    amount,
    comment,
    file,
    vendor,
    paymentType,
    referenceNumber,
    pfms,
    last_balance,
    interest,
    intpaid,
    granted,
    total,
    balance,
    form_type,
    schema_type
  } = req.body;

  const q =
    'INSERT INTO payment_details (atlcode, paymentCategory, paymentSlab, date, amount, comment, file, vendor, paymentType, referenceNumber, pfms, last_balance, interest, intpaid, granted, total, balance, form_type, schema_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    atlcode,
    paymentCategory,
    paymentSlab,
    date,
    amount,
    comment,
    file,
    vendor,
    paymentType,
    referenceNumber,
    pfms,
    last_balance,
    interest,
    intpaid,
    granted,
    total,
    balance,
    form_type,
    schema_type
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: 'Payment details added successfully' });
  });
});

// PUT update an existing payment detail
router.put('/admindashboard/paymenttable/:id', (req, res) => {
  const {
    atlcode,
    paymentCategory,
    paymentSlab,
    date,
    amount,
    comment,
    file,
    vendor,
    paymentType,
    referenceNumber,
    pfms,
    last_balance,
    interest,
    intpaid,
    granted,
    total,
    balance,
    form_type,
    schema_type
  } = req.body;

  const { id } = req.params;

  const q =
    'UPDATE payment_details SET atlcode=?, paymentCategory=?, paymentSlab=?, date=?, amount=?, comment=?, file=?, vendor=?, paymentType=?, referenceNumber=?, pfms=?, last_balance=?, interest=?, intpaid=?, granted=?, total=?, balance=?, form_type=?, schema_type=? WHERE id=?';

  const values = [
    atlcode,
    paymentCategory,
    paymentSlab,
    date,
    amount,
    comment,
    file,
    vendor,
    paymentType,
    referenceNumber,
    pfms,
    last_balance,
    interest,
    intpaid,
    granted,
    total,
    balance,
    form_type,
    schema_type,
    id
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: 'Payment details updated successfully' });
  });
});

// DELETE a payment detail by ID
router.delete('/admindashboard/paymenttable/:id', (req, res) => {
  const { id } = req.params;
  const q = 'DELETE FROM payment_details WHERE id=?';

  db.query(q, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    return res.status(200).json({ message: 'Payment details deleted successfully' });
  });
});
// ================================================================================================================
// =================================== --Lead Info details -- ==========================================================

// Read operation for lead information
router.get("/Leads", (req, res) => {
  const q = "SELECT * FROM lead_information ";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Create operation for lead information
router.post("/Leads", (req, res) => {
  const { school_board, lead_source, pin_code, organization_name, address, in_group, state, city, full_name, landline_number, email, designation, phone_number, no_students, expected_close_date, attachment_path, employeeid } = req.body;
  const q = "INSERT INTO lead_information (school_board, lead_source, pin_code, organization_name, address, in_group, state, city, full_name, landline_number, email, designation, phone_number, no_students, expected_close_date, attachment_path, employeeid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [school_board, lead_source, pin_code, organization_name, address, in_group, state, city, full_name, landline_number, email, designation, phone_number, no_students, expected_close_date, attachment_path, employeeid], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Lead information added successfully" });
  });
});

// Update operation for lead information
router.put("/Leads/:id", (req, res) => {
  const { school_board, lead_source, pin_code, organization_name, address, in_group, state, city, full_name, landline_number, email, designation, phone_number, no_students, expected_close_date, attachment_path, employeeid } = req.body;
  const { id } = req.params;
  const q = "UPDATE lead_information SET school_board=?, lead_source=?, pin_code=?, organization_name=?, address=?, in_group=?, state=?, city=?, full_name=?, landline_number=?, email=?, designation=?, phone_number=?, no_students=?, expected_close_date=?, attachment_path=?, employeeid=? WHERE id=?";
  db.query(q, [school_board, lead_source, pin_code, organization_name, address, in_group, state, city, full_name, landline_number, email, designation, phone_number, no_students, expected_close_date, attachment_path, employeeid, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Lead information updated successfully" });
  });
});

// Delete operation for lead information
router.delete(`/Leads/:id`, (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM lead_information WHERE id=?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Lead information deleted successfully" });
  });
});
// ================================================================================================================
// =================================== --user details -- ==========================================================
// Read operation for event information
router.get("/eventInformation", (req, res) => {
  const q = "SELECT * FROM form ";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Create operation for event information
router.post("/eventInformation", (req, res) => {
  const { email, college, date, from_time, to_time, students, class_details, trainer, expense, expense_details, comments, requirements, image_path, employeeid, created_at } = req.body;
  const q = "INSERT INTO form (email, college, date, from_time, to_time, students, class_details, trainer, expense, expense_details, comments, requirements, image_path, employeeid, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [email, college, date, from_time, to_time, students, class_details, trainer, expense, expense_details, comments, requirements, image_path, employeeid, created_at], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Event information added successfully" });
  });
});

// Update operation for event information
router.put("/eventInformation/:id", (req, res) => {
  const { email, college, date, from_time, to_time, students, class_details, trainer, expense, expense_details, comments, requirements, image_path, employeeid, created_at } = req.body;
  const { id } = req.params;
  const q = "UPDATE form SET email=?, college=?, date=?, from_time=?, to_time=?, students=?, class_details=?, trainer=?, expense=?, expense_details=?, comments=?, requirements=?, image_path=?, employeeid=?, created_at=? WHERE id=?";
  db.query(q, [email, college, date, from_time, to_time, students, class_details, trainer, expense, expense_details, comments, requirements, image_path, employeeid, created_at, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Event information updated successfully" });
  });
});

// Delete operation for event information
router.delete(`/eventInformation/:id`, (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM event_information WHERE id=?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "Event information deleted successfully" });
  });
});

// ================================================================================================================
// =================================== -- manage Employee  details -- ==========================================================

// Read operation with employeeid filter
router.get("/EmpDetails", (req, res) => {
  const q = "SELECT * FROM usertable WHERE employeeid IS NOT NULL AND employeeid != ''"; // Add WHERE clause to filter by non-empty employeeid
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Create operation
router.post("/EmpDetails", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid } = req.body;
  const q = "INSERT INTO usertable (username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(201).json({ message: "User added successfully" });
  });
});

// Update operation
router.put("/EmpDetails/:id", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid } = req.body;
  const { id } = req.params;
  const q = "UPDATE usertable SET username=?, password=?, firstName=?, lastName=?, role=?, email=?, phone=?, address=?, dateofjoining=?, atlcode=?, employeeid=? WHERE id=?";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "User updated successfully" });
  });
});

// Delete operation
router.delete("/EmpDetails/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM usertable WHERE id=?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "User deleted successfully" });
  });
});

// ================================================================================================================
// =================================== -- Manage School details -- ==========================================================
router.get("/admindashboard/ManageSchool", (req, res) => {
  const q = "SELECT * FROM usertable WHERE atlcode IS NOT NULL AND atlcode != ''";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ data });
  });
});

// Route to create a new school
router.post("/admindashboard/ManageSchool", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, registration_date } = req.body;
  const q = "INSERT INTO usertable (username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, registration_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, registration_date], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(201).json({ message: "School added successfully" });
  });
});

// Route to update an existing school
router.put("/admindashboard/ManageSchool/:id", (req, res) => {
  const { username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, registration_date } = req.body;
  const { id } = req.params;
  const q = "UPDATE usertable SET username=?, password=?, firstName=?, lastName=?, role=?, email=?, phone=?, address=?, dateofjoining=?, atlcode=?, employeeid=?, registration_date=? WHERE id=?";
  db.query(q, [username, password, firstName, lastName, role, email, phone, address, dateofjoining, atlcode, employeeid, registration_date, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "School updated successfully" });
  });
});

// Route to delete a school
router.delete(`/admindashboard/ManageSchool/:id`, (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM usertable WHERE id=?";
  db.query(q, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.status(200).json({ message: "School deleted successfully" });
  });
});

// ==========================================================================================================================================================================
module.exports = router;
