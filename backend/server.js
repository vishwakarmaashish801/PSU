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

// using the routes 
app.use("/api", testRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});