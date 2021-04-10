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

    connection.query(checkQuery, [req.firstName, req.lastName, req.email], (error, result, fields) => {
        if (error) console.group(error.message);
        else {
            if (result.length === 0) {
                res.status(308).json({message: "Invalid Credentials"});
            }
            else {
                res.status(201).json(result)
                
            }
            connection.end()
        }
    }) 
}



function retrieveSurveyQuestions(res) {
    let connection = connectDatabase();

    let questionsQuery = "SELECT * FROM Question"

    let test = "SELECT * FROM Question, Answer"

    connection.query(test, (err, result) => {
        if (err) {
            //callback(err, null)
            connection.end()
        }
        else {
            //callback(null, result)
            console.log(result)
            connection.end()
        }
    })
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

function retrieveQuestions(req, res) {
    let connection = connectDatabase();
    let questionsQuery = "SELECT * from Question;"

    connection.query(questionsQuery, (err, result) => {
        if (err) res.status(500).json({error: err})
        else {
        let questionsArray = []
        for (let i = 0; i < result.length; i++) {
            let question = {
                questionID: result[i].QuestionID,
                question: result[i].Question
            }
            questionsArray.push(question)
        }
        res.send(questionsArray)
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
    let {userID, answer1, answer2, answer3, text} = req
    let connection = connectDatabase();


    let guests = []
    for (let i = 0; i < userID.length; i++) {
        let user = []
        user.push(userID[i], answer1, answer2, answer3, text)
        guests.push(user)
    }
    
    let pollQuery = "INSERT INTO Poll (UserID, Question1, Question2, Question3, Question4) VALUES (?,?,?,?,?); "
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
    retrieveSurveyQuestions,
    retrieveQuestions,
    postPollResults
}