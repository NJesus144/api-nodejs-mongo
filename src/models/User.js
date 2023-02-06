const mongoose = require("../database");

const bcryptjs = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async (next) => {
  const hash = await bcryptjs
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
