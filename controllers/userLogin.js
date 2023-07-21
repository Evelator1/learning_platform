const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const { ErrorResponse } = require("../utils/ErrorResponse");
////////////////////////////////////////////////////
//
//   SIGNUP
//
//
//
const signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const user = await User.findOne({ email });

    if (user) throw new ErrorResponse("User already exists", 400);

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashed,
      username,
    });

    const payload = {
      email: newUser.email,
      id: newUser._id,
      role: newUser.role,
      username: newUser.username,
      userWishWelcome: newUser.userWishWelcome,
      personalInfo: newUser.personalInfo,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "500m",
    });

    res
      .cookie("access_token", token, { maxAge: 6000 * 500, httpOnly: true })
      .json(payload);
  } catch (error) {
    next(error);
  }
};
////////////////////////////////////////////////////
//
//   EDIT PASSWORD
//
//
//
const editPassword = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const { oldPassword, newPassword } = req.body;

    //here i check if the user is the right one
    const checkUser = await User.findById({ _id }).select("+password");
    if (!checkUser) throw new ErrorResponse("User doesn't exist", 404);
    console.log(
      checkUser,
      "____________________________________________ user checked"
    );

    //here i here i check if the old password is the right one
    const isMatch = await bcrypt.compare(oldPassword, checkUser.password);
    
    if (!isMatch) throw new ErrorResponse("Wrong password", 401);
    console.log(
      isMatch,
      "___________________________________________password Matches"
      );
      //here i hash the newPassword
      const saltRounds = 10;
      console.log(newPassword, saltRounds)
    const hashed = await bcrypt.hash(newPassword, saltRounds);
    console.log(
      hashed,
      "___________________________________________newPassword was hashed"
    );

    console.log(newPassword, "is the newPassword");
    console.log(hashed, " hashed password");

    //here i update the password
    const user = await User.findByIdAndUpdate(
      _id,
      { password: hashed },
      { new: true }
    );
    console.log("this is the user: ", user);

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
      username: user.username,
      userWishWelcome: user.userWishWelcome,
      personalInfo: user.personalInfo,
    };

    console.log("this is the payload: ", payload);

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    res
      .cookie("access_token", token, { maxAge: 10 * 60 * 1000, httpOnly: true })
      .json(payload);
  } catch (error) {
    next(error);
  }
};
////////////////////////////////////////////////////
//
//   LOGIN
//
//
//
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new ErrorResponse("User doesn't exist", 404);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new ErrorResponse("Wrong password", 401);

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
      username: user.username,
      userWishWelcome: user.userWishWelcome,
      personalInfo: user.personalInfo,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1440m",
    });

    res
      .cookie("access_token", token, { maxAge: 24 * 60* 60 * 1000, httpOnly: true })
      .json(payload);
  } catch (error) {
    next(error);
  }
};
////////////////////////////////////////////////////
//
//   LOGOUT
//
//
//
const logout = async (req, res, next) => {
  try {
    console.log(res);
    console.log(new Date(0));
    res
      .cookie("access_token", "", {
        maxAge: 0,
        expires: new Date(0),
        httpOnly: true,
      })
      .send("User is Logged Out");
  } catch (error) {
    next(error);
  }
};
////////////////////////////////////////////////////
//
//   GETPROFILE
//   (similar to as ./controllers/users-->getUserByUsername)
//
//
const getProfile = async (req, res, next) => {
  try {
    const username = req.user.username;
    const user = await User.findOne({ username });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login, editPassword, logout, getProfile };
