const express = require('express');
const router = express.Router();
const db = require('../../db.js');

router.get('/empdashboard/LeadInfo/:employeeId', (req, res) => {
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

// // Route to fetch school information for a specific employee
// router.get('/schoolInfo/:employeeId', (req, res) => {
//     const { employeeId } = req.params;
//     const query = `SELECT * FROM college_information WHERE employeeid = '${employeeId}'`;

//     db.query(query, (err, result) => {
//         if (err) {
//             console.error('Error fetching school info:', err);
//             res.status(500).json({ error: 'Internal server error' });
//             return;
//         }
//         res.json({ data: result });
//     });
// });


module.exports = router;
