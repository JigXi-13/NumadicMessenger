const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  let conn = "";
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  } finally {
    // Ensures that the client will close when you finish/error
    // if (conn) {
    //   await conn.disconnect();
    // }
  }
};

module.exports = connectDB;
