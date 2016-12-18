const express = require('express');
const router = express.Router();
const db = require('../models/summary');

router.get('/summary', db.getSummary);

module.exports = router;
