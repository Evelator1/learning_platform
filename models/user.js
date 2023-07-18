// const { Binary } = require("bson");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {type: String, default:""},
  username: { type: String,unique: true, required: true  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  profilePicture: { type: String, default:"https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png"},
  userWishWelcome: { type: Boolean, default: true},
  role: { type: String, enum: ["user", "admin"], default: "user" },
  createdAt:{type:Date,default:Date.now}
});
const User = mongoose.model("User", userSchema);

module.exports = User;
