// Express configuration
const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

// Controllers
const { createNewUser, loginUser, renewToken } = require("../controllers/auth");

// Custom middlewares
const validateProperties = require("../middlewares/validate-properties");

// Routes
router.post(
  "/new",
  [
    check("name", "Name is mandatory").not().isEmpty(),
    check("email", "Email is mandatory").isEmail(),
    check("password", "password is mandatory").isLength({ min: 8 }),
    validateProperties
  ],
  createNewUser
);

router.post(
  "/login",
  [
    check("email", "Email is mandatory").isEmail(),
    check("password", "password is mandatory").isLength({ min: 8 }),
    validateProperties
  ],
  loginUser
);

router.get("/renew", renewToken);

module.exports = router;
