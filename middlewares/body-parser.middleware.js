const { validationResult, matchedData } = require("express-validator");

const bodyParser = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({
      status: 422,
      message: "Validation failed",
      data: errors.mapped(),
    });
  }
  req.body = matchedData(req);
  return next();
};

module.exports = {
  bodyParser: bodyParser,
};
