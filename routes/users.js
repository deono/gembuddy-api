const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

/**
 * Get a user
 */
router.get("/", (req, res) => {
  res.status(200).json({ message: "User route hit" });
});

/**
 * Register new user
 */
// Register
router.post(
  "/register",
  // middleware that handles the registration process
  authMiddleware.register,
  // json handler
  authMiddleware.signJWTForUser
);

module.exports = router;
