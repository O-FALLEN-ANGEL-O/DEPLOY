// login.js
const express = require('express');
const router = express.Router();
const db = require('../../db');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM usertable WHERE username = ? AND password = ?`;
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

router.get('/getEmployeeId', (req, res) => {
  const { username } = req.query;
  const query = `SELECT employeeid FROM usertable WHERE username = '${username}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching employee ID:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'Employee ID not found' });
      return;
    }
    const employeeid = result[0].employeeid;
    res.json({ employeeid });
  });
});

router.get('/getAtlCode', (req, res) => {
  const { username } = req.query;
  const query = `SELECT atlcode FROM usertable WHERE username = '${username}'`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error fetching atlcode:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: 'ATL code not found' });
      return;
    }
    const atlcode = result[0].atlcode;
    res.json({ atlcode });
  });
});

module.exports = router;
