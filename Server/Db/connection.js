const mongoose = require("mongoose");

const ConnectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("db connected");
  } catch (error) {
    console.log(`Error in connecting db ${error}`);
  }
};

module.exports = ConnectToDb;
