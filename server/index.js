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
    const { first_name, last_name, email,password ,phone_number } = req.body;
    db.query('INSERT INTO customer (first_name, last_name, email,password ,phone_number) VALUES (?,?,?,?,?)', [first_name, last_name, email,password ,phone_number], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    })
})

//Sing-in
app.post('/signin', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM customer WHERE email = ? AND password = ?', [email, password], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.listen(3001, () => {
    console.log("Server started on port 3001");
})

