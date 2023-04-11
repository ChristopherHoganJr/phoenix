const User = require("../controllers/user.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post("/api/user/register", User.register);
  app.post("/api/user/login", User.login);
};
