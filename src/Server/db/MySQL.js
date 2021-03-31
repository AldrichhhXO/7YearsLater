const mysql = require('mysql');

/**
 * MySQL connection params
 */
let connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
})

/**
 * RetrieveGuestList query
 * 1. This will be responsible for getting the guestlist.
 */
function retrieveGuestlist() {
    connection.connect((err) => {
        if (err) {
            throw err;
            
        }
    });

    let guestListQuery = "SELECT * from GuestList"
    connection.query(guestListQuery, () => {

    });
    connection.end();
}

/**
 * addGuest query
 * 1. This will add a user to the guestlist
 */
function addGuest() {
    connection.connect((err) => {
        if (err) {
            throw err;
        }
    });

    let insertQuery = "INSERT INTO T "

    connection.end();
}

