// Import
const express = require("express");
const {
  getSpellsByQuery,
  getAllSpells,
} = require("../controllers/spell.controller");

const router = express.Router();

// Routes
router.post("/", getSpellsByQuery);

router.get("/", getAllSpells);

// Export
module.exports = router;
