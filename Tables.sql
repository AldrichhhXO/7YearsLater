CREATE TABLE `GuestList` (
	`UserID` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(20) NOT NULL,
	`LastName` VARCHAR(20) NOT NULL,
	`Email` VARCHAR(30) NOT NULL,
    'Rsvp' BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (`UserID`)
);


# Insert Query (GuestList) 


# Searching for user AND plus One (? is the user that put in the information at RSVP).

select * from GuestList Where UserID = ? OR PlusOne = ?;

# Address Table

CREATE TABLE `Address` (
	`AddressID` INT NOT NULL AUTO_INCREMENT,
	`StreetNumber` VARCHAR(6),
	`StreetName` VARCHAR(20),
	`City` VARCHAR(30),
	`State` CHAR(2),
	`ZipCode` CHAR(5),
	`UserID` INT,
	PRIMARY KEY (`AddressID`)
	FOREIGN KEY (`UserID`) REFERENCES GuestList(`UserID`)
);

# Question Table

CREATE TABLE Question (
	QuestionID INT NOT NULL AUTO_INCREMENT,
	Question VARCHAR(50)
	PRIMARY KEY (`QuestionID`)
);


# Insert a question to the Question Table.

INSERT INTO Question (Question) VALUES ("What entree would you prefer at our wedding?")

# Answer Table

CREATE TABLE Answer (
	AnswerID INT NOT NULL AUTO_INCREMENT,
	ANSWER VARCHAR(40),
	QuestionID INT,
	PRIMARY KEY (`AnswerID`),
	FOREIGN KEY (`QuestionID`) REFERENCES Question(`QuestionID`)
);


## Insert an answer for the table that is connected to the 




# Query to grab all the answers for a question

SELECT q.Question, a.AnswerID, a.Answer From Question q
INNER JOIN Answer a WHERE q.QuestionID = a.QuestionID;


## If you want to isolate the answers specifically

SELECT Answer from Answer
Inner Join Question where Answer.QuestionID = Question.QuestionID;


CREATE TABLE POLL (
	PollID INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL UNIQUE,
    Question1 VARCHAR(20) NOT NULL,
    Question2 VARCHAR(11) NOT NULL,
    Question3 VARCHAR(3) NOT NULL,
    Question4 TEXT,
    PRIMARY KEY(PollID),
    FOREIGN KEY(UserID) REFERENCES GuestList(UserID)
);
vegetarian


# Insert Into Polls

INSERT INTO POLL (QuestionID, UserID, AnswerID) VALUES
();


# Getting User Specific results from the Table

SELECT g.UserID, g.FirstName, g.LastName, q.QuestionID, q.Question, a.AnswerID, a.Answer
from (((Poll
INNER JOIN GuestList g ON g.UserID = Poll.UserID)
INNER JOIN Answer a ON Poll.QuestionID = a.QuestionID)
INNER JOIN Question q ON Poll.QuestionID = q.QuestionID)
WHERE Poll.UserID = 4;
