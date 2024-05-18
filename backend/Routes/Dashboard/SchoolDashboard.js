const express = require('express');
const router = express.Router();
const db = require('../../db.js');



router.get('/schooldashboard/schoolInfo/:atlcode', (req, res) => {
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

router.get('/schooldashboard/paymentDetails/:atlcode', (req, res) => {
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

module.exports = router;
