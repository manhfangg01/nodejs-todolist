import express from "express";
import dotenv from "dotenv";
import router from "./router/index.js";
import connectDb from "./config/database.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8001;
app.use(express.json()); // đây là một middleware cơ bản dùng để kiểm soát dữ liệu được đưa lên có phải là json hay không, nếu đùng thì có thể chuyển tự động thành dạng object
app.use(router);

connectDb().then(() => {
  app.listen(port, () => console.log(`Server is listening at localhost:${port}`));
});
