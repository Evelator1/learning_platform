const authorize = (role) => {
  return (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  };
};

// const authorizeUser = authorize("user");
// const authorizeAdmin = authorize("admin");

module.exports = {
  authorize,
  //   authorizeUser,
  //   authorizeAdmin,
};
