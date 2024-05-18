const express = require('express');
const router = express.Router();
const cors = require('cors'); // Import cors middleware
const loginRoutes = require('../Routes/Login/Login');
// const adminDashboardRoutes = require('./adminDashboard');
// const schoolsRoutes = require('./schools');

// Use CORS middleware
router.use(cors());

// Define routes
router.use('/login', loginRoutes);
// router.use('/admin-dashboard', adminDashboardRoutes);
// router.use('/schools', schoolsRoutes);

module.exports = router;
