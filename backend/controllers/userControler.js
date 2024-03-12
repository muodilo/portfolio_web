const asyncHandler = require('express-async-handler');
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//create a user

const createUser = async(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(403);
    throw new Error('Please provide all fields');
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    //check if user exists
    const existingUser = await User.findOne({email});
    if (existingUser) {
      res.status(403);
      throw new Error('User already exists');
    }
    const user =await User.create({
      username,
      email,
      password: hashedPassword,
      role:'user',
    })
    res.status(201).json({
      id: user._id,
      username:user.username,
      email: user.email,
      role:user.role,
      token:generateToken(user._id),
    })
  } catch (error) {
    res.status(400)
    throw new Error(error.message);
  }
})

//generate token function
const generateToken = (id) => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  )
  return token;
};