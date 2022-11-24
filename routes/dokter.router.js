const express = require("express");
const router = express.Router();

const {
  createDokter,
  getAllDokter,
  getDokterById,
//   updateDokter,
//   deleteDokterById,
} = require("../controllers/dokter.controller.js");

router.post("/", createDokter);
router.get("/", getAllDokter);
router.get("/byId", getDokterById);
// router.post("/byId", updateDokter);
// router.delete("/", deleteDokterById);

module.exports = router;
