const asyncHandler = require('express-async-handler')
const Subscription = require('../models/Subscription.js');

//subscribe to a newslatter

export const subscribe = asynchandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(403);
    throw new Error('Please provide an email');
  }

  try {
    //check if allready subscribed
    const subscribedEmail = await Subscription({ email });
    if (subscribedEmail) {
      res.status(403);
      throw new Error('Already subscribed');
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