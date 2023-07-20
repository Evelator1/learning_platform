const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { ErrorResponse } = require("../utils/ErrorResponse");

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

const editPassword = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.findByIdAndUpdate(
      id,
      { password: hashed },
      { new: true }
    );

    const payload = {
      email: user.email,
      id: user._id,
      role: user.role,
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

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) throw new ErrorResponse("User doesn't exist", 404);

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new ErrorResponse("Wrong password", 401);

    const payload = { email: user.email, id: user._id, role: user.role , username: user.username, profilePicture: user.profilePicture, userWishWelcome: user.userWishWelcome};

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    res
      .cookie("access_token", token, { maxAge: 10*60*1000, httpOnly: true })
      .json(payload);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    console.log(res);
    console.log(new Date(0))
    res.cookie("access_token", "", { maxAge: 0, expires: new Date(0), httpOnly: true }).send("User is Logged Out");
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req, res, next) => {
  try {
    // const { id } = req.user;
    //console.log(req.user.username,"is the request")
    const  username  = req.user.username ;
    const user = await User.findOne({username});
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, login, editPassword, logout, getProfile };