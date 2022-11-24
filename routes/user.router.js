const express = require("express");
const router = express.Router();

const {
  register,
  login,
  updateProfil,
  getProfil,
} = require("../controllers/user.controller");

router.get("/byId", getProfil);
router.post("/byId", updateProfil);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
