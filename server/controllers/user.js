import User from "../models/user.js";

const createUser = async (req, res) => {
  try {
    const { name, email, phone_number } = req.body;

    const newUser = await User.create({ name, email, phone_number });

    if (newUser) {
      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone_number: newUser.phone_number,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { createUser, getUsers };
