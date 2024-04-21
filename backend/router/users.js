const express = require("express");

express.Router();

const router = express.Router();

const User = require("../model/user");

const upload = require("../middleware/image");

router.get("/", async (req, res) => {
  try {
    const filter = {};
    const options = {
      page: req.query.page || 1,
      limit: req.query.limit || 10,
      sort: { date_created: -1 },
    };
    if (req.query.email) {
      filter.email = req.query.email;
    }
    if (req.query.first_name) {
      filter.first_name = req.query.first_name;
    }
    if (req.query.last_name) {
      filter.last_name = req.query.last_name;
    }
    if (req.query.date_of_birth) {
      filter.date_of_birth = req.query.date_of_birth;
    }
    if (req.query.gender) {
      filter.gender = req.query.gender;
    }
    if (req.query.phone_number) {
      filter.phone_number = req.query.phone_number;
    }
    const users = await User.paginate({ ...filter }, options);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const user = new User(req.body);
    if (req.file) {
      user.image = req.file.path;
    }
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", upload.single("image"), async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (req.file) {
      result.image = req.file.path;
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
