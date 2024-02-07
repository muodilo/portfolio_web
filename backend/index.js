const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db.js');

connectDB();

const app = express();
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.json({ message: 'hello' });
})



app.listen(port, () => console.log(`server is listening on port ${port}` ));