const express = require("express");
const router = express.Router();

const usersController = require("../../../controllers/api/v1/user_controller");

// Register user
router.post("/register", usersController.registerUser);

router.post("/login", usersController.loginUser);

module.exports = router;
