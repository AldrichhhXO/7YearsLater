CREATE TABLE `GuestList` (
	`UserID` INT NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(20) NOT NULL,
	`LastName` VARCHAR(20) NOT NULL,
	`Email` VARCHAR(30) NOT NULL,
    'Rsvp' BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (`UserID`)
);


# Insert Query (GuestList) 




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


