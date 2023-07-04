const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const userRouter = require("./routers/userRouter");
const usersRouter = require("./routers/usersRouter");
const subscriptionsRouter = require("./routers/subscriptionsRouter");
const moviesRouter = require("./routers/moviesRouter");
const membersRouter = require("./routers/membersRouter");

const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

// routers
app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
//app.use('/subscriptions',subscriptionsRouter);
//app.use('/members',membersRouter);

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
