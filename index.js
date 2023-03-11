import express from "express";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import postRouter from "./routes/PostRouter.js";

const PORT = 3000;
const DB_URL =
  "mongodb+srv://zlarkisz:123@cluster0.0w3lf29.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", postRouter);
// app.use("/users", userRouter);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error(error);
  }
}

startApp();
