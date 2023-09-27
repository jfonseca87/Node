const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database/config");

const app = express();

// Database connection
dbConnection();

// Handle json body in request
app.use(express.json());

// Validate if user is authenticated and also if token is valid
app.use(require("./middlewares/validate-jwt"));

app.use("/api/auth", require("./routes/auth"));

app.listen(process.env.PORT, () => {
  console.log("Server running at port " + process.env.PORT);
});
