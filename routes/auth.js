const express = require("express");
const { signup, login, logout, getProfile, editPassword } = require("../controllers/userLogin");
const { verifyToken } = require("../middlewares/verifyToken");
const { authorize } = require("../middlewares/authorize");

const authRouter = express.Router();
authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.put("/editPassword/:id", editPassword);
authRouter.post("/logout", logout);
authRouter.get("/profile", verifyToken, authorize("user"), getProfile);

module.exports = authRouter;
