const mongoose=require("mongoose");
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(
        process.env.MONGODB_CONNECTION_URL,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log(`MongoDB connect: ${conn.connection.host}`);
    } catch (error) {
      console.log(`error :${error}`);
      process.exit();
    }
  }
  module.exports = connectDB