// models/User.js
import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true }, // You should hash passwords!
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

export const Client = mongoose.model("Client", clientSchema);
