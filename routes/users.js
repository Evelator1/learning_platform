const express = require("express");
const {
  createUser,
  getUsers,
  getUserByUsername,
  updateUser,
  updatePreferences,
} = require("../controllers/users");
const { verifyToken } = require("../middelwares/verifyToken");
const { isAccountOwner } = require("../middelwares/isAccountOwner");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:username", verifyToken, isAccountOwner, getUserByUsername);
userRouter.put("/:id", updateUser);
userRouter.put("/:id/wishWelcome", updatePreferences);
userRouter.post("/", createUser);

module.exports = userRouter;
