const express = require("express");
const router = express.Router();

const {getAllUser} = require("../controllers/userController");

router.get("/getUser" , getAllUser);

module.exports = router;