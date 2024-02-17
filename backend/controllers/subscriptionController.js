const asyncHandler = require('express-async-handler')
const Subscription = require('../models/Subscription.js');

//subscribe to a newslatter

const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(403);
    throw new Error('Please provide an email');
  }

  try {
    //check if allready subscribed
    const subscribedEmail = await Subscription.findOne({ email });
    if (subscribedEmail) { 
      res.status(403).json({ message:'Already subscribed'})
    }

    const subscriber = await Subscription.create({
      email,
      role:'subscriber',
    })

    res.status(201).json({
      id: subscriber._id,
      email:subscriber.email,
    })
  } catch (error) {
    res.status(400)
    throw new Error(error.message);
  }
})

module.exports = {
  subscribe
}