const express = require("express");
const session = require("express-session");

const authService = require("../services/auth.service");

const authenticateUser = async (req, res, next) => {
  const authenticated = await authService.authenticateUser(req.body.username, req.body.password);
  delete req.body.password;
  if (authenticated) {
    return next();
  }
  return next({
    status: 403,
    message: "Authentication failed",
    data: {},
  })
}

module.exports = {
  authenticateUser: authenticateUser,
}