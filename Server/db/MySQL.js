const mysql = require('mysql');

function connectDatabase() {
    /**
     * MySQL connection params
     */
    let connection = mysql.createConnection({
        host: process.env.PROD_HOST || process.env.DEV_HOST,
        user: process.env.PROD_USER || process.env.DEV_USER,
        password: process.env.PROD_PW || process.env.DEV_PW,
        port: process.env.PROD_PORT || process.env.DEV_PORT,
        database: process.env.PROD_DB || process.env.DEV_DB,
        insecureAuth: true
    })
    return connection
}

/**
 * RetrieveGuestList query
 * 1. This will be responsible for getting the guestlist.
 * 2. result returns the data, similar to JSON
 * 3. result[0] Isolates the first one
 * 4. result[0].FirstName Gets the first name of the first data entry
 */
function retrieveGuestlist(res) {
    let guestlistQuery = "SELECT * from GuestList;"
    let connection = connectDatabase();
    connection.query(guestlistQuery, (err, result, fields) =>{
        if (err) {
            res.status(500).json({error: err})
            connection.end()
        }
        else {
            console.log('GuestList: ', result)
            res.status(200).json({guestlist: result})
            connection.end()
        }
    })
}



function checkRsvp(req, res) {
    let connection = connectDatabase();
    let checkQuery = "SELECT * FROM GuestList WHERE FirstName = ? AND LastName = ? AND Email = ?;"
    let secondQuery = "SELECT * FROM GuestList WHERE (UserID = ? OR PlusOne = ?) AND Rsvp = 0;"
    connection.query(checkQuery, [req.firstName, req.lastName, req.email], (error, result, fields) => {
        if (error) console.log(error.message);
        else {
            if (result.length === 0) {
                res.status(308).json({message: "Invalid Credentials"});
            }
            else {
                connection.query(secondQuery, [result[0].UserID, result[0].UserID], (err, result, fields) => {
                    if (err) console.log(err.message)
                    else {
                        console.log(result)
                        res.status(201).json(result)
                    }
                })
            }
            connection.end()
        }
    }) 
}


/**
 * Posts the poll results onto the DB.
 * @param {} req 
 * @param {*} res 
 */
function postPollResults (req, res) {
    let {userID, answer1, answer2, answer3,  text} = req
    let connection = connectDatabase();

    let userIDs = []
    let guests = []
    for (let i = 0; i < userID.length; i++) {
        let user = []
        if ( i == 1) {
            user.push(userID[i], answer1, answer3, text)
        }
        else {
            user.push(userID[i], answer1, answer2, text)
        }
        userIDs.push(userID[i])
        guests.push(user)
    }

    let RsvpQuery = "Update GuestList SET RSVP = 1 WHERE UserID = ?"
    
    connection.query(RsvpQuery, [userIDs])

    console.log(guests)
    
    let pollQuery = "INSERT INTO Poll (`UserID`, `Question1`, `Question2`, `Question4`) VALUES ?; "
    connection.query(pollQuery, [guests], (err, result) => {
        if (err) {
            console.log(err)
            connection.end()
        }
        else {
            res.status(200).json({message: "Success"})
            connection.end()
        }
    })
}

module.exports = {
    connectDatabase,
    retrieveGuestlist,
    checkRsvp,
    postPollResults
}