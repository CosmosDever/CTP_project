const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const cors = require("cors");

const mongoURI = "mongodb://127.0.0.1:27017/ctp_database"; // Replace with your MongoDB URI
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
}

connectToDatabase();

// ...

// Sign-up
app.post("/signup", async (req, res) => {
  const { first_name, last_name, email, password, phone_number } = req.body;

  if (!first_name || !last_name || !email || !password || !phone_number) {
    res.send("All fields are required");
    return;
  }

  // Check if the email already exists in the 'customer' collection
  const customerCollection = client.db().collection("customer");

  try {
    const existingUser = await customerCollection.findOne({ email });

    if (existingUser) {
      res.send("Email already exists");
      return;
    }

    // If email is unique, proceed with the signup
    const result = await customerCollection.insertOne({
      first_name,
      last_name,
      email,
      password,
      phone_number,
    });

    res.send("Sign-up successful");
  } catch (error) {
    console.error("Error during sign-up", error);
    res.status(500).send("Internal Server Error");
  }
});

// ...

// Sign-in
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const customerCollection = client.db().collection("customer");

  try {
    const user = await customerCollection.findOne({ email, password });

    if (user) {
      res.send("Logged in");
    } else {
      res.send("No user found");
    }
  } catch (error) {
    console.error("Error during sign-in", error);
    res.status(500).send("Internal Server Error");
  }
});

// ...

// Change password
app.post("/changepassword", async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    res.send("All fields are required");
    return;
  }

  const customerCollection = client.db().collection("customer");

  try {
    const result = await customerCollection.updateOne({ email }, { $set: { password: newPassword } });

    if (result.modifiedCount > 0) {
      res.send("Password changed successfully");
    } else {
      res.send("No user found");
    }
  } catch (error) {
    console.error("Error during password change", error);
    res.status(500).send("Internal Server Error");
  }
});

// ...

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

