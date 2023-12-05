const express = require("express");
const app = express();
const db = require("./database");
const cors = require("cors");

app.use(cors());
app.use(express.json());



app.get('/customer', (req, res) => {
    db.query("SELECT * FROM customer", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//Sign-up
app.post('/signup', (req, res) => {
    const { first_name, last_name, email, password, phone_number } = req.body;

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

            res.send("Values inserted");
        });
    });
});

//Sing-in
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM customer WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } 
        if (result.length > 0) {
            res.send("logged in");
            return;
        }
        else {
            res.send("no user found");
            return;
            res.send(result);
        }
    })
    

    
})

app.listen(3001, () => {
    console.log("Server started on port 3001");
})

