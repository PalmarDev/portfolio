const express = require("express");

express.Router();

const router = express.Router();

const User = require("../model/user");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const publicKey = process.env.JWT_PUBLIC_KEY;
const privateKey = process.env.JWT_PRIVATE_KEY;
const algorithms = process.env.JWT_ALGORITHM || "RS256";
const length = process.env.JWT_ALGORITHM_LENGTH;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    if (!(await user.comparePassword(password))) {
      console.log("Contraseña inválida");
      return res.status(401).json({ message: "Contraseña inválidas" });
    }

    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(payload, privateKey, {
      algorithm: algorithms,
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user_id: user._id,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post("/logout", async (req, res) => {
  try {
    clearCookies(req, res, "token");
    clearCookies(req, res, "user_id");
    clearCookies(req, res, "role");
    res.status(200).json("Logout successful");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
