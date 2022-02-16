const session = require("express-session");

const createSession = (req, res) => {
  req.session.user = req.body.username;
  delete req.body.username;
  return res.status(200).end();
}

module.exports = {
  createSession: createSession,
}