use ctp_database;
INSERT INTO Customer (ID, first_name, last_name, email, password, phone_number)
VALUES
  (1, 'John', 'Doe', 'john.doe@email.com', 'password123', '123-456-7890'),
  (2, 'Jane', 'Smith', 'jane.smith@email.com', 'pass456', '987-654-3210'),
  (3, 'Mike', 'Johnson', 'mike.johnson@email.com', 'mikepass', '555-123-7890'),
  (4, 'Emily', 'Williams', 'emily@email.com', 'emilypass', '777-999-1234'),
  (5, 'David', 'Miller', 'david.miller@email.com', 'davidpass', '222-333-4444'),
  (6, 'Anna', 'Taylor', 'anna.taylor@email.com', 'annapass', '111-222-3333'),
  (7, 'Brian', 'Jones', 'brian.jones@email.com', 'brianpass', '444-555-6666'),
  (8, 'Olivia', 'Brown', 'olivia@email.com', 'oliviapass', '888-999-0000'),
  (9, 'Daniel', 'Clark', 'daniel.clark@email.com', 'danielpass', '123-987-4567'),
  (10, 'Sophia', 'White', 'sophia.white@email.com', 'sophiapass', '567-789-1234'),
  (11, 'Kevin', 'Moore', 'kevin.moore@email.com', 'kevinpass', '111-222-3333'),
  (12, 'Emma', 'Davis', 'emma.davis@email.com', 'emmapass', '444-555-6666'),
  (13, 'Matthew', 'Thomas', 'matthew@email.com', 'matthewpass', '777-888-9999'),
  (14, 'Grace', 'Roberts', 'grace@email.com', 'gracepass', '111-222-3333'),
  (15, 'Christopher', 'Hill', 'chris@email.com', 'chrispass', '444-555-6666'),
  (16, 'Lily', 'Turner', 'lily@email.com', 'lilypass', '777-888-9999'),
  (17, 'William', 'Scott', 'william@email.com', 'williampass', '111-222-3333'),
  (18, 'Ava', 'Martin', 'ava@email.com', 'avapass', '444-555-6666'),
  (19, 'Andrew', 'Ward', 'andrew@email.com', 'andrewpass', '777-888-9999'),
  (20, 'Ella', 'Cooper', 'ella@email.com', 'ellapass', '111-222-3333'),
  (21, 'James', 'Baker', 'james@email.com', 'jamespass', '444-555-6666'),
  (22, 'Mia', 'Fisher', 'mia@email.com', 'miapass', '777-888-9999'),
  (23, 'Logan', 'Reed', 'logan@email.com', 'loganpass', '111-222-3333'),
  (24, 'Abigail', 'Kelly', 'abigail@email.com', 'abigailpass', '444-555-6666'),
  (25, 'Benjamin', 'Harrison', 'benjamin@email.com', 'benjaminpass', '777-888-9999');

INSERT INTO ParkingSpace (ID, car_vin, status, floor)
VALUES
  (1, 'ABC12345678901234', 'Occupied', 1),
  (2, 'DEF23456789012345', 'Occupied', 1),
  (3, 'GHI34567890123456', 'Occupied', 1),
  (4, 'JKL45678901234567', 'Occupied', 1),
  (5, 'MNO56789012345678', 'Occupied', 1),
  (6, 'PQR67890123456789', 'Occupied', 1),
  (7, 'STU78901234567890', 'Occupied', 1),
  (8, 'VWX89012345678901', 'Occupied', 1),
  (9, 'YZA90123456789012', 'Occupied', 1),
  (10, 'BCB01234567890123', 'Occupied', 1),
  (11, 'CDC12345678901234', 'Occupied', 1),
  (12, 'DED23456789012345', 'Occupied', 1),
  (13, 'EFE34567890123456', 'Occupied', 2),
  (14, 'FGH45678901234567', 'Occupied', 2),
  (15, 'HIJ56789012345678', 'Occupied', 2),
  (16, 'JKK67890123456789', 'Occupied', 2),
  (17, 'LMN78901234567890', 'Occupied', 2),
  (18, 'OPQ89012345678901', 'Occupied', 2),
  (19, 'RST90123456789012', 'Occupied', 2),
  (20, 'UVU01234567890123', 'Occupied', 2),
  (21, 'VWV12345678901234', 'Occupied', 2),
  (22, 'WXX23456789012345', 'Occupied', 2),
  (23, 'YXY34567890123456', 'Occupied', 2),
  (24, 'ZYZ45678901234567', 'Occupied', 2),
  (25, 'AAA56789012345678', 'Occupied', 3),
  (26, NULL, 'Vacant', 3),
  (27, NULL, 'Vacant', 3),
  (28, NULL, 'Vacant', 3),
  (29, NULL, 'Vacant', 3),
  (30, NULL, 'Vacant', 3),
  (31, NULL, 'Vacant', 3),
  (32, NULL, 'Vacant', 3),
  (33, NULL, 'Vacant', 3),
  (34, NULL, 'Vacant', 3),
  (35, NULL, 'Vacant', 3),
  (36, NULL, 'Vacant', 3),
  (37, NULL, 'Vacant', 3),
  (38, NULL, 'Vacant', 4),
  (39, NULL, 'Vacant', 4),
  (40, NULL, 'Vacant', 4),
  (41, NULL, 'Vacant', 4),
  (42, NULL, 'Vacant', 4),
  (43, NULL, 'Vacant', 4),
  (44, NULL, 'Vacant', 4),
  (45, NULL, 'Vacant', 4),
  (46, NULL, 'Vacant', 4),
  (47, NULL, 'Vacant', 4),
  (48, NULL, 'Vacant', 4),
  (49, NULL, 'Vacant', 5),
  (50, NULL, 'Vacant', 5),
  (51, NULL, 'Vacant', 5),
  (52, NULL, 'Vacant', 5),
  (53, NULL, 'Vacant', 5),
  (54, NULL, 'Vacant', 5),
  (55, NULL, 'Vacant', 5),
  (56, NULL, 'Vacant', 5),
  (57, NULL, 'Vacant', 5),
  (58, NULL, 'Vacant', 5),
  (59, NULL, 'Vacant', 5),
  (60, NULL, 'Vacant', 5),
  (61, NULL, 'Vacant', 6),
  (62, NULL, 'Vacant', 6),
  (63, NULL, 'Vacant', 6),
  (64, NULL, 'Vacant', 6),
  (65, NULL, 'Vacant', 6),
  (66, NULL, 'Vacant', 6),
  (67, NULL, 'Vacant', 6),
  (68, NULL, 'Vacant', 6),
  (69, NULL, 'Vacant', 6),
  (70, NULL, 'Vacant', 6),
  (71, NULL, 'Vacant', 6),
  (72, NULL, 'Vacant', 6);

INSERT INTO Room (ID, customer_id, room_num)
VALUES
-- Floor 1
  (100001, 1, 201), (100002, 2, 202), (100003, 3, 203), (100004, 4, 204), (100005, 5, 205),
  (100006, 6, 206), (100007, 7, 207), (100008, 8, 208), (100009, 9, 209), (100010, 10, 210),
  (100011, 11, 211), (100012, 12, 212), (100013, 13, 213), (100014, 14, 214), (100015, 15, 215),

-- Floor 2
  (200001, 16, 216), (200002, 17, 217), (200003, 18, 218), (200004, 19, 219), (200005, 20, 220),
  (200006, 21, 221), (200007, 22, 222), (200008, 23, 223), (200009, 24, 224), (200010, 25, 225),
  (200011, NULL, 226), (200012, NULL, 227), (200013, NULL, 228), (200014, NULL, 229), (200015, NULL, 230),

-- Floor 3
  (300001, NULL, 231), (300002, NULL, 232), (300003, NULL, 233), (300004, NULL, 234), (300005, NULL, 235),
  (300006, NULL, 236), (300007, NULL, 237), (300008, NULL, 238), (300009, NULL, 239), (300010, NULL, 240),
  (300011, NULL, 241), (300012, NULL, 242), (300013, NULL, 243), (300014, NULL, 244), (300015, NULL, 245),

-- Floor 4
  (400001, NULL, 246), (400002, NULL, 247), (400003, NULL, 248), (400004, NULL, 249), (400005, NULL, 250),
  (400006, NULL, 251), (400007, NULL, 252), (400008, NULL, 253), (400009, NULL, 254), (400010, NULL, 255),
  (400011, NULL, 256), (400012, NULL, 257), (400013, NULL, 258), (400014, NULL, 259), (400015, NULL, 260),

-- Floor 5
  (500001, NULL, 261), (500002, NULL, 262), (500003, NULL, 263), (500004, NULL, 264), (500005, NULL, 265),
  (500006, NULL, 266), (500007, NULL, 267), (500008, NULL, 268), (500009, NULL, 269), (500010, NULL, 270),
  (500011, NULL, 271), (500012, NULL, 272), (500013, NULL, 273), (500014, NULL, 274), (500015, NULL, 275),

-- Floor 6
  (600001, NULL, 276), (600002, NULL, 277), (600003, NULL, 278), (600004, NULL, 279), (600005, NULL, 280),
  (600006, NULL, 281), (600007, NULL, 282), (600008, NULL, 283), (600009, NULL, 284), (600010, NULL, 285),
  (600011, NULL, 286), (600012, NULL, 287), (600013, NULL, 288), (600014, NULL, 289), (600015, NULL, 290);

INSERT INTO Reservation (ID, customer_id, car_vin, parking_id, room_id, book_date, park_date, out_date)
VALUES
  (1, 1, 'ABC12345678901234', 1, 100001, '2023-11-01', '2023-11-02', '2023-11-03'),
  (2, 2, 'DEF23456789012345', 2, 100002, '2023-11-02', '2023-11-03', '2023-11-04'),
  (3, 3, 'GHI34567890123456', 3, 100003, '2023-11-03', '2023-11-04', '2023-11-05'),
  (4, 4, 'JKL45678901234567', 4, 100004, '2023-11-04', '2023-11-05', '2023-11-06'),
  (5, 5, 'MNO56789012345678', 5, 100005, '2023-11-05', '2023-11-06', '2023-11-07'),
  (6, 6, 'PQR67890123456789', 6, 100006, '2023-11-06', '2023-11-07', '2023-11-08'),
  (7, 7, 'STU78901234567890', 7, 100007, '2023-11-07', '2023-11-08', '2023-11-09'),
  (8, 8, 'VWX89012345678901', 8, 100008, '2023-11-08', '2023-11-09', '2023-11-10'),
  (9, 9, 'YZA90123456789012', 9, 100009, '2023-11-09', '2023-11-10', '2023-11-11'),
  (10, 10, 'BCB01234567890123', 10, 100010, '2023-11-10', '2023-11-11', '2023-11-12'),
  (11, 11, 'CDC12345678901234', 11, 100011, '2023-11-11', '2023-11-12', '2023-11-13'),
  (12, 12, 'DED23456789012345', 12, 100012, '2023-11-12', '2023-11-13', '2023-11-14'),
  (13, 13, 'EFE34567890123456', 13, 100013, '2023-11-13', '2023-11-14', '2023-11-15'),
  (14, 14, 'FGH45678901234567', 14, 100014, '2023-11-14', '2023-11-15', '2023-11-16'),
  (15, 15, 'HIJ56789012345678', 15, 100015, '2023-11-15', '2023-11-16', '2023-11-17'),
  (16, 16, 'JKK67890123456789', 16, 200001, '2023-11-16', '2023-11-17', '2023-11-18'),
  (17, 17, 'LMN78901234567890', 17, 200002, '2023-11-17', '2023-11-18', '2023-11-19'),
  (18, 18, 'OPQ89012345678901', 18, 200003, '2023-11-18', '2023-11-19', '2023-11-20'),
  (19, 19, 'RST90123456789012', 19, 200004, '2023-11-19', '2023-11-20', '2023-11-21'),
  (20, 20, 'UVU01234567890123', 20, 200005, '2023-11-20', '2023-11-21', '2023-11-22'),
  (21, 21, 'VWV12345678901234', 21, 200006, '2023-11-21', '2023-11-22', '2023-11-23'),
  (22, 22, 'WXX23456789012345', 22, 200007, '2023-11-22', '2023-11-23', '2023-11-24'),
  (23, 23, 'YXY34567890123456', 23, 200008, '2023-11-23', '2023-11-24', '2023-11-25'),
  (24, 24, 'ZYZ45678901234567', 24, 200009, '2023-11-24', '2023-11-25', '2023-11-26'),
  (25, 25, 'AAA56789012345678', 25, 200010, '2023-11-25', '2023-11-26', '2023-11-27');