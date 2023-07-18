const { ErrorResponse } = require("../utils/ErrorResponse");

const isAccountOwner = (req, res, next) => {
  try {
    console.log(req.user.username)
    if (req.user.username === req.params.username) {

        next()
    }else{
        throw new ErrorResponse("Not Allowed to get access to the Content", 403)
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAccountOwner,
};
