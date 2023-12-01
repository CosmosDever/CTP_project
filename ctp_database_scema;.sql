CREATE database ctp_database;
use ctp_database;
CREATE TABLE Customer (
    ID INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone_number VARCHAR(20)
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
CREATE TABLE Reservation (
    ID INT PRIMARY KEY,
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


