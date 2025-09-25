// scripts/createUsers.js
import mongoose from "mongoose";
import Client from "../models/client.js"; // Import the Mongoose model (capitalized)

async function createUsers() {
  try {
    // Connect to the DB if not already connected
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://localhost:27017/programZenavo", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB");
    }

    await Client.deleteMany(); // Clear existing clients (optional)

    const admin = new Client({
      username: "admin1",
      password: "adminpass123", // TODO: hash this in production!
      role: "admin",
    });

    const user = new Client({
      username: "user1",
      password: "user12345",
      role: "user",
    });

    await admin.save();
    await user.save();

    console.log("Admin and user created");
    process.exit(0);
  } catch (err) {
    console.error("Error creating users:", err);
    process.exit(1);
  }
}

createUsers();
