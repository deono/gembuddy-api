const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log(">>>> [MONGO DB] connected... ");
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
