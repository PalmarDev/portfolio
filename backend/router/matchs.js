const express = require("express");
const router = express.Router();
const Match = require("../model/match");

router.post("/request", async (req, res) => {
  try {
    const { user1, user2 } = req.body;
    const match = new Match({ user1, user2 });
    await match.save();
    res.status(201).json(match);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.post("/accept", async (req, res) => {
  try {
    const { matchId } = req.body;
    const match = await Match.findByIdAndUpdate(
      matchId,
      { status: "accepted", date_updated: Date.now() },
      { new: true },
    );
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
