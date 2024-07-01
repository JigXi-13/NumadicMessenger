const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  let conn = "";
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
