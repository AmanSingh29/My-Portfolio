const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ConnectToDb = require("./Db/connection");
const cors = require("cors");
const PORT = 5000;
dotenv.config();

app.use(express.json());
app.use(cors());

ConnectToDb();

// Model
require("./Models/messageModel");

//Routes
app.use("/api", require("./Routes/messageRoute"));

app.listen(PORT, function () {
  console.log(`Server has started at ${PORT}`);
});
