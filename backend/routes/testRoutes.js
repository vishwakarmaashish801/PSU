const express = require("express");
const router = express.Router();

// const  { getAllQuesitons } = require("../controllers/testController");
const { getAllQuestions } = require("../controllers/testController");


router.get("/get-questions", getAllQuestions);

module.exports = router;