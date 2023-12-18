CREATE database ctp_database;
use ctp_database;
CREATE TABLE Customer (
    ID INT auto_increment PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL
);


CREATE TABLE ParkingSpace (
    ID INT PRIMARY KEY,
    car_vin VARCHAR(17),
    status VARCHAR(255),
    floor INT
);


CREATE TABLE Room (
    ID INT PRIMARY KEY,
    customer_id INT,
    room_num INT,
    FOREIGN KEY (customer_id) REFERENCES Customer(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX idx_car_vin ON ParkingSpace (car_vin);
CREATE INDEX idx_customer_id ON Room (customer_id);


CREATE TABLE Reservation (
    ID INT auto_increment PRIMARY KEY,
    customer_id INT,
    car_vin VARCHAR(17),
    parking_id INT,
    room_id INT,
    book_date DATE,
    park_date DATE,
    out_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (car_vin) REFERENCES ParkingSpace(car_vin) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (parking_id) REFERENCES ParkingSpace(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (room_id) REFERENCES Room(ID) ON DELETE SET NULL ON UPDATE CASCADE
);

CREATE INDEX idx_room_id ON Reservation (room_id);


