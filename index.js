const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3011;
require("./db");

app.get("/", (req, res) => {
  try {
    res.status(201).send("Welcome to the final project");
  } catch (error) {
    res.status(500).send("Error while trying to get", error);
  }
});
const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());

app.use(express.json());

const userRouter = require("./routes/users");
app.use("/users", userRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

const postRouter = require("./routes/posts");
app.use("/post", postRouter);

const commentRouter = require("./routes/comments");
app.use("/comments", commentRouter);

const learningcardRouter = require("./routes/learningcards");
app.use("/learningcards", learningcardRouter);

app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is successfully running on http://localhost:${port}`)
);
