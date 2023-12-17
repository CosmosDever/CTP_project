const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const db = require("./database");
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


app.use(session({
    secret: '1234567890QWERTY',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

//Sign-up
app.post('/signup', (req, res) => {
    const { first_name, last_name, email, password, phone_number } = req.body;
    if (!first_name || !last_name || !email || !password || !phone_number) {
        res.send("All fields are required");
        return;
    }

    // Check if the email already exists in the 'customer' table
    db.query('SELECT * FROM customer WHERE email = ?', [email], (selectErr, selectResult) => {
        
        if (selectErr) {
            console.log(selectErr);
            res.send("Internal Server Error");
            return;
        }

        // If email already exists, send an error response
        if (selectResult.length > 0) {
            res.send("Email already exists");
            return;
        }

        // If email is unique, proceed with the signup
        db.query('INSERT INTO customer (first_name, last_name, email, password, phone_number) VALUES (?,?,?,?,?)', [first_name, last_name, email, password, phone_number], (insertErr, insertResult) => {
            if (insertErr) {
                console.log(insertErr);
                res.send("Internal Server Error");
                return;
            }

            res.send("Sign-up successful");
        });
    });
});

//Sing-in
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send("All fields are required");
        return;
    }
    db.query('SELECT * FROM customer WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.log(err);
            return;
        } 
        else if (result.length > 0) {
            res.send(result);
            return;
        }
        else {
            res.send("no user found");
            return;
        }
    })
})

app.post('/changepassword', (req, res) => {
    const { email, newPassword } = req.body;
    // Check if email and new password are provided
    if (!email || !newPassword) {
        res.send("All fields are required");
        return;
    }
    // Update the password
    db.query('UPDATE customer SET password = ? WHERE email = ?', [newPassword, email], (updateErr, updateResult) => {
        if (updateErr) {
        console.log(updateErr);
        res.status(500).send("Internal Server Error");
        return;
        }
        res.send("Password changed successfully");
    });
});

app.post('/carparking',(req, res) => {
    const { customer_id,space_id, car_vin, room_key, book_date } = req.body;
    if (!customer_id) {
        res.status(401).send("Unauthorized");
        return;
    }
    db.query("UPDATE parkingspace SET car_vin = ?, status = 'Occupied' WHERE ID = ?", [car_vin, space_id], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            db.query("UPDATE room SET customer_id = ? WHERE ID = ?", [customer_id, room_key], (updateErr, updateResult) => {
                if (updateErr) {
                    console.log(updateErr);
                    res.status(500).send("Internal Server Error");
                    return;
                }
                else{
                    db.query(
                        "INSERT INTO reservation (customer_id, car_vin, parking_id, room_id, book_date, park_date, out_date) VALUES (?, ?, ?, ?, ?, NULL, NULL)",
                        [customer_id, car_vin, space_id, room_key, book_date],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                db.query("select MAX(reservation.ID) as reservation_id,CONCAT(first_name, ' ', last_name) as customer_name, room_id, car_vin , parking_id, book_date FROM customer join reservation on customer.ID= reservation.customer_id where customer.ID =?;", [customer_id], (err, result) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        console.log(result);
                                        res.send(result);
                                    }
                                });
                            }
                        }
                    );
                }
            });
        }
    });
});
app.post ('/cancel', (req, res) => {
    const { reservation_id ,space_id} = req.body;
    if (reservation_id){
        db.query("delete from reservation where ID = ?", [reservation_id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Reservation cancelled successfully");
            }
        })
        db.query("UPDATE parkingspace SET car_vin = Null, status = 'Vacant' WHERE ID = ?", [space_id], (err, result) => {
            if (err) {
                console.log(err);
            } 
        });

    }
    else(
        console.log("No reservation found")
    )
    
})
app.listen(3001, () => {
    console.log("Server started on port 3001");
})