import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "todolist" });
    console.log("Kết nối đến MongoDB thành công");
  } catch (error) {
    console.error("Lỗi kết nối MongoDB", error);
    process.exit(1);
  }
};

export default connectDb;
