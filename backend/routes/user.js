import express from "express";
import User from "../models/client.js";
import authorizeRoles from "../middleware/authorize.js";

const router = express.Router();

// Example: Admin-only route
router.get("/admin", authorizeRoles(["admin"]), async (req, res) => {
  const admins = await User.find({ role: "admin" });
  res.json(admins);
});

export default router;
