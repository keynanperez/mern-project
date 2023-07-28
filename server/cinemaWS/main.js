const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const userRouter = require("./routers/userRouter");
const usersRouter = require("./routers/usersRouter");
const permissionsRouter = require("./routers/permissionsRouter");


const app = express();
const port = 8000;

connectDB();

app.use(cors());
app.use(express.json());

// routers
app.use("/user", userRouter);
app.use("/users", usersRouter);
app.use("/permissions",permissionsRouter);
//app.use('/members',membersRouter);

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
