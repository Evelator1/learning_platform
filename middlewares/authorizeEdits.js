const { ErrorResponse } = require("../utils/ErrorResponse");

const authorizeEdits = (req, res, next) => {
  try {

    if (req.user.id === req.params.id) {
      console.log(req.user)
        next()
    }else{
        throw new ErrorResponse("Not Allowed to get access to the Content", 403)
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authorizeEdits
};

