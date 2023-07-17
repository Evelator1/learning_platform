const express = require("express");
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updatePreferences,
} = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.get("/:username", getUserById);
userRouter.put("/:id", updateUser);
userRouter.put("/:id/wishWelcome", updatePreferences);
userRouter.post("/", createUser);


module.exports = userRouter;
