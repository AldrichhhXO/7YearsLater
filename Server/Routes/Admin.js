const express = require('express');
const router = express.Router();
let mysql = require('../db/MySQL');

/**
 * GET Guestlist route
 *  1. This will be the route responsible for reading all the guests in the DB.
 */
router.get('/dashboard', (req, res) => {
    return mysql.retrieveGuestlist(res);
});


module.exports = router;