const express = require("express");

express.Router();

const router = express.Router();

const User = require("../model/user");
const Session = require("../model/session");
const upload = require("../middleware/image");

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

    const session = await Session.findOne({ user_id: user._id });

    if (session) {
      session.token = token;
      session.role = user.role;
      session.is_login = true;
      session.date_session = Date.now();
      await session.save();
    } else {
      const newSession = new Session({
        user_id: user._id,
        token: token,
        role: user.role,
        is_login: true,
        date_session: Date.now(),
      });
      await newSession.save();
    }

    res.status(200).json({
      message: "Login successful",
      session: session
    });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

router.post("/register", upload.single("image"), async (req, res) => {
  try {
    const { email, password, first_name, last_name, date_of_birth, gender, phone_number } = req.body;

    // Validación de entrada básica
    if (!email || !password) {
      return res.status(400).send("All fields are required");
    }

    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User({
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      date_of_birth: date_of_birth,
      gender: gender,
      phone_number: phone_number,
      image: req.file ? req.file.path : null, // Verifica si req.file existe
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/logout", async (req, res) => {
  try {
    clearCookies(req, res, "session");

    const session = await Session.findOne({ user_id: req.user._id });
    if (session) {
      session.is_login = false;
      await session.save();
    }
    res.status(200).json("Logout successful");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
