const express = require('express');
const Router = express.Router();
const mysql = require('../db/MySQL');


/**
 * @name POST rsvp route
 * @description checks if the user is in the guestlist
 * @note user info MUST match the database records.
 */
Router.post('/rsvp', (req, res, next) => {
    let { firstName, lastName, email } = req.body;
    let body = {
        firstName,
        lastName,
        email
    }
    return mysql.checkRsvp(body, res);
});


Router.get('/api/qa', (req, res) => {
    return mysql.retreivePollQuestions(res);
} )



module.exports = Router;