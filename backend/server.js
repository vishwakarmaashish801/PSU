const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./config/db");

const app = express()
const port = 5000




app.use(cors()); // Enables CORS for all routes
app.use(bodyParser.json()); // Parses incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parses URL-encoded data




// importing the routes
const testRoutes = require("./routes/testRoutes");

//importing the auth routes
const authRoutes = require("./routes/authRoutes");

// using the routes 
app.use("/api", testRoutes);

//using the auth routes
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});