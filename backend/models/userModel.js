const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    
  },
  role: {
    type: String,
    enum:['user','admin']
  },
}, {
  timestamps:true,
})

const User = mongoose.model("User", userSchema);
export default User;