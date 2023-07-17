const jwt = require("jsonwebtoken");
const { ErrorResponse } = require("../utils/ErrorResponse");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (token) {
      const payload = jwt.verify(token, process.env.JWT_SECRET);

      req.user = payload;

      return next();
    }

    throw new ErrorResponse("Forbidden", 403);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyToken,
};
