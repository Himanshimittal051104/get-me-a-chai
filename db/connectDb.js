import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb://localhost:27017/chai`)
      // useNewUrlParser: true,
      // no longer required with Mongoose 6.x and later, as it is now the default behavior.
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
    // If the connection fails, process.exit(1) is called, which terminates the current Node.js process. The 1 signifies that the process is exiting due to failure (non-zero exit code). This is important because we usually don't want our app to continue running if it can't connect to the database.
  }
}
export default connectDB