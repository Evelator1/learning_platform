const express = require("express");
const {
  creatUser,
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


module.exports = userRouter;
