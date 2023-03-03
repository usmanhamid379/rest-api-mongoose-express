const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://Usmanhamid123:Usmanhamid123@cluster0.lk1ka4f.mongodb.net/?retryWrites=true&w=majority"
    );
    // console.log("conn.connection.host", `conn.connection.host`.green.underline);
  } catch (err) {
    console.log("usman hamid-------------");
    process.exit(1);
  }
};

module.exports = connectDb;
