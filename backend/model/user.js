const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const paginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 36,
  },
  first_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  last_name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 15,
  },
  date_of_birth: {
    type: Date,
    required: true,
    min: new Date(1900, 1, 1),
    max: new Date(2023, 1, 1),
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    required: true,
  },
  phone_number: {
    type: String,
    minLength: 8,
    maxLength: 15,
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  date_created: {
    type: Date,
    default: Date.now,
    inmutable: true,
  },
  date_updated: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(paginate);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.pre("findByIdAndUpdate", async function (next) {
  if (this._update.password) {
    this._update.password = await bcrypt.hash(this._update.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
