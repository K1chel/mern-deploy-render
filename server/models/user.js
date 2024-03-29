import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone_number: String,
});

const User = mongoose.model("User", userSchema);

export default User;
