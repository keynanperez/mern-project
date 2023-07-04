const express = require("express");
const cors = require("cors");
const connectDB = require("./configs/db");
const loadData = require("./utils/dataLoading");
const membersRouter = require("./routers/membersRouter");
const moviesRouter = require("./routers/moviesRouter");

const LoadMoviesAndMembers = async () => {
  const { data: members } = await loadData.getAllMembers();
  const { data: movies } = await loadData.getAllMovies();
  //console.log(members)
};
LoadMoviesAndMembers();
const app = express();
const port = 8001;

connectDB();

app.use(cors());
app.use(express.json());

// routers
app.use("/members", membersRouter);
app.use("/movies", moviesRouter);

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
);
