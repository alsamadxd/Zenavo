import express from "express";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import fs from "fs";
import cors from "cors";
import dotenv from 'dotenv'
import { Program } from "./models/program.js";
import { UserData } from "./models/user.js";
import { Client } from "./models/client.js";

uuidv4();
dotenv.config();
const app = express();
const port = 5000;

// const uri =process.env.MONGODB_URI;
// console.log(uri);
const connectToDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI; // Ensure the Mongo URI is set as an environment variable
    if (!dbURI) {
      console.error("MongoDB URI is missing");
      process.exit(1);
    }

    // Connect to MongoDB without using useNewUrlParser and useUnifiedTopology

    console.log("Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the app if connection fails
  }
};

connectToDB();


// let conn = await mongoose.connect("mongodb://localhost:27017/programZenavo");

app.use(cors());
// const cors = require("cors");
// app.use(
//   cors({
//     origin: "http://10.213.238.65:5173", // frontend IP + port
//     credentials: true, // if using cookies/sessions
//   })
// );

app.use(express.json());

app.get("/api/programs", async (req, res) => {
  try {
    const data = fs.readFileSync("./workout.json", "utf-8");
    const program = JSON.parse(data);
    // await Program.insertMany(program)
    res.json(program);
    // res.send(program);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load programs" });
  }
});
app.post("/api/user/data", async (req, res) => {
  const { username } = req.body;
  const userId = username;
  try {
    const userdata = await UserData.find({ userId }).sort({ date: -1 });
    // console.log(userdata)
    res.json(userdata);
  } catch (err) {
    console.error("Something went wrong", err);
    res.status(500), json({ error: "Server error" });
  }
});

app.post("/api/userid/data", async (req, res) => {
  const { userId, exName, selectedReps, selectedWeight } = req.body;
  const date = new Date().toLocaleDateString("en-CA");

  // const exName=req.body;

  await UserData.insertMany({
    userId,
    date,
    exName,
    selectedReps,
    selectedWeight,
  });
  res.status(200).json({ message: "Data Saved" });
});
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Client.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not Found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid Password" });
    }
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error: ", err);
    res.status(500), json({ error: "Server error" });
  }
});
app.post("/api/signup", async (req, res) => {
  const { username, password } = req.body;
  await Client.insertMany({ username, password });
  res.status(200).json({ message: "Login successful" });
});
app.post("/api/check-username", async (req, res) => {
  const { username } = req.body;

  try {
    // Find a user with the provided email
    const existingUser = await Client.findOne({ username });

    if (existingUser) {
      // Email already exists
      return res
        .status(400)
        .json({ message: "Email is already in use", isUnique: false });
    }

    // Email is unique
    return res.status(200).json({ message: "Email is unique", isUnique: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error checking email", error });
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
// app.listen(5000, "0.0.0.0", () => {
//   console.log("Server running on port 5000");
// });
