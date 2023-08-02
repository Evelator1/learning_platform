const express = require("express");
require("dotenv").config();
const path = require("path")
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

const port = process.env.PORT || 3011;


app.use(express.static(path.join(__dirname, "client", "dist")))
require("./db");


const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(cookieParser());

app.use(express.json());


const authRouter = require("./routes/auth");
app.use("/api/auth", authRouter);



const userRouter = require("./routes/users");
app.use("/api/users", userRouter);


const postRouter = require("./routes/posts");
app.use("/api/post", postRouter);

const commentRouter = require("./routes/comments");
app.use("/api/comments", commentRouter);

const learningcardRouter = require("./routes/learningcards");
app.use("/api/learningcards", learningcardRouter);

const questionRouter=require("./routes/interviewQuestion")
app.use("/api/interviewQuestions",questionRouter)

const reviewRouter=require("./routes/reviews")
app.use("/api/reviews", reviewRouter)

const answerRouter=require("./routes/interviewAnswer")
app.use("/api/nterviewAnswers",answerRouter)

const jobsRouter=require("./routes/jobs")
app.use("/api/jobs", jobsRouter)


app.get("*", (req, res)=>{
  res.sendFile(path.join(__dirname, "client", "dist", "index.html" ))
})

app.use(errorHandler);

app.listen(port, () =>
console.log(`Server is successfully running on http://localhost:${port}`)
);
