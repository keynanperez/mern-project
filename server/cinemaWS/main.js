const express = require('express');
const cors = require('cors')
const connectDB = require('./configs/db')

const usersRouter = require('./routers/usersRouter');

const app = express();
const port = 8000;

//connectDB()

app.use(cors())
app.use(express.json());

// routers
//app.use('/users', usersRouter);

app.listen(
  port,
  () => console.log(`app is listening at http://localhost:${port}`)
);