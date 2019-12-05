const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: String,
  number: String,
  avatarUrl: String,
  joinDate: Date,
  new: {
    type: Boolean,
    default: true
  }
});

const UserModel = model("user", userSchema);

module.exports = UserModel;
