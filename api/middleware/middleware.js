const User = require("../users/users-model");

const validateCredentional = (req, res, next) => {
 const { username, password } = req.body;
 if (!username || !password) {
  next({
   status: 401,
   message: "username and password required",
  });
 } else {
  next();
 }
};

async function checkUsernameAvailable(req, res, next) {
 const [user] = await User.findBy({ username: req.body.username });
 if (user) {
  next({
   status: 422,
   message: "Username taken",
  });
 } else {
  next();
 }
}

async function checkUsernameExists(req, res, next) {
 const [user] = await User.findBy({ username: req.body.username });
 if (user) {
  next();
 } else {
  next({
   status: 401,
   message: "invalid credentials",
  });
 }
}

module.exports = {
 validateCredentional,
 checkUsernameAvailable,
 checkUsernameExists,
};
