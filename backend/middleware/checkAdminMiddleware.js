const asyncHandler = require('express-async-handler');

const checkAdmin = asyncHandler(async (req, res, next) => {
  if (!req.user) {
    res.status(401);
    throw new Error('Not Authorized');
  }
  const user = req.user;

  if (user && user.role === 'admin') {
    next();
  }
  else {
    res.status(401)
    throw new Error('Not Authorized as an admin')
  }
})

module.exports = checkAdmin;