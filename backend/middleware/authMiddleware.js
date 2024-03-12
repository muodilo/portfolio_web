const jwt = require('jsonwebtoken');
const asyncHandler= require ('express-async-handler');
const User = require('../models/userModel.js');

const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

    try {
      
      token = req.headers.authorization.split(' ')[1];
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);

      //find user using token
      const user = await User.findById(decoded.id);
      if (!user) {
        res.status(401)
        throw new Error("Not authorized")
      }
      req.user = user;

      next();
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error("Not Authorized");
    }
    if (!token) {
      res.status(401)
      throw new Error('Not Authorized');
    }
  }
})

module.exports = {
  protect
}