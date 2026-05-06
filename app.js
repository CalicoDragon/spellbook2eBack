// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const mongooseDBConnect = require("./api/config/mongodb.config");

// Consts
const API_PORT = process.env.API_PORT || 3000;
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./api/routes/spell.route"));

// express app execution
app.listen(API_PORT, () => {
  console.log(`Server listening on port: ${API_PORT}`);
  console.log("Attempting to connect to MongoDB...");
  mongooseDBConnect();
});
