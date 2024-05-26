const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    token: {
        type: String,
    },
    role: {
        type: String,
    },
    is_login: {
        type: Boolean,
    },
    date_created: {
        type: Date,
        default: Date.now,
        inmutable: true,
    },
    date_session: {
        type: Date,
        default: Date.now,
    },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session