const jwt = require("jsonwebtoken");
const User = require("../model/user");
require("dotenv").config();

const public = process.env.JWT_PUBLIC_KEY;

const Authenticate = async (req, res, next) => {
  const openPaths = ["/auth/login", "/auth/logout"];
  if (openPaths.includes(req.path)) {
    return next();
  }

  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token.replace(/^Bearer\s/, ""), public, async (err, decoded) => {
    if (err) {
      console.log("Error verifying token", err.message, token);
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (decoded) {
      const user = await User.findById(decoded.id);
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      req.user = user;
      return next();
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  });
};

module.exports = Authenticate;
