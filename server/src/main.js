const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 3000;


app.get("/Signin-Signup", (req, res) => {
    res.send({
        message: "Hello World!"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


