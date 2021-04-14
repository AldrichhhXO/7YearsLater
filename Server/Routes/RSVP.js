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


Router.post('/rsvp/qa', (req, res) => {
    let { userID, answer1 , answer2, answer3, text } = req.body;

    let body = {
        userID,
        answer1,
        answer2, 
        answer3, 
        text
    }
    return mysql.postPollResults(body, res);
})




module.exports = Router;