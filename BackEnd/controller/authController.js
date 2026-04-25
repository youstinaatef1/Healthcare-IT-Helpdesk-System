const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerSchema, loginSchema } = require("./validation/authValidation");

const register = async (req, res, next) => {
  try {
    const { error, value } = registerSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        errors: error.details.map((err) => err.message),
      });
    }

    const { username, email, password, role } = value;

    const existUser = await User.findOne({ email });
    if (existUser) return res.status(400).json({ msg: "User Already Exists" });

    if (!req.file) {
      return res.status(400).json({ msg: "Profile Image Required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashPassword,
      role,
      profileImage: req.file.path,
    });

    res.status(201).json({
      msg: "Account Created Successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      return res.status(400).json({
        errors: error.details.map((err) => err.message),
      });
    }

    const { email, password } = value;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Email or Password" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(400).json({ msg: "Invalid Email or Password" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SK || "default_secret",
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      msg: "Login Success",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res) => {
  try {
    res.status(200).json({
      msg: "Logout Success",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Server Error",
    });
  }
};

module.exports = {
  register,
  login,
  logout,
};