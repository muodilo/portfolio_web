const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Other options if needed
    };

    const conn = await mongoose.connect(MONGO_URI, options);

    if (conn) {
      console.log(`Database is connected: ${conn.connection.host}`.cyan.underline);
    } else {
      console.log('Failed to establish a connection to the database.'.red.underline);
    }
  } catch (error) {
    console.error(`Error connecting to the database: ${error.message}`.red.underline);
    process.exit(1);
  }
};

module.exports = connectDB;
