const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "sakila",
})


app.get('/actor', (req, res) => {
    db.query("SELECT first_name, last_name FROM actor LIMIT 10", (err, result) => {
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

