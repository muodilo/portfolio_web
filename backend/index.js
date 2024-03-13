const express = require('express');
require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db.js');
const { errorHandler } = require('./middleware/errorHandlerMiddleware.js');

connectDB();

const app = express();
app.use(cors());
const port = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/v1', require('./routes/subscribeRoute.js'));
app.use('/api/v1/users', require('./routes/userRoute.js'));
app.use('/api/v1/posts', require('./routes/postsRoutes.js'));


app.use(errorHandler);
app.listen(port, () => console.log(`server is listening on port ${port}` ));