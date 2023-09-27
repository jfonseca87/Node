const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { jwtGenerator } = require("../helpers/jwt");

const createNewUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        ok: false,
        msg: "There is an existing user with this email",
      });
    }

    user = new User(req.body);

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: "user created successfully",
      data: user.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error ocurred creating a new user",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate if user exists
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "Email or Password are not correct, please check - email",
      });
    }

    // Comparing passwords
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Email or Password are not correct, please check - password",
      })
    }

    const token = await jwtGenerator(user.id, user.name, user.email);
    
    res.status(200).json({
      ok: true,
      data: {
        id: user.id,
        token
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "An error ocurred doing logging",
    });
  }
};

const renewToken = async (req, res) => {
  const {id, name, email} = req.currentUser;
  const newToken = await jwtGenerator(id, name, email);

  res.json({
    ok: true,
    data: {
      token: newToken
    }
  });
};

module.exports = {
  createNewUser,
  loginUser,
  renewToken,
};
