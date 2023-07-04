const express = require("express");
const moviesBLL = require("../BLL/moviesBLL");

const router = express.Router();

// Get All movies
router.route("/").get(async (req, res) => {
  try {
    const movies = await moviesBLL.getAllMovies();
    res.json(movies); // 200 - OK
  } catch (error) {
    res.json("There was an error!");
  }
});

// Get movie by ID
router.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const movie = await moviesBLL.getMovieById(id);
  res.json(movie);
});

// Add a new movie
router.route("/").post(async (req, res) => {
  const obj = req.body;
  const result = await moviesBLL.addMovie(obj);
  res.status(201).json(result);
});

// Update a movie
router.route("/:id").put(async (req, res) => {
  try {
    const { id } = req.params;
    const obj = req.body;
    const result = await moviesBLL.updateMovie(id, obj);
    res.json(result);
  } catch (error) {
    res.status(500).json("There was an error!");
  }
});

// Delete a movie
router.route("/:id").delete(async (req, res) => {
  const { id } = req.params;
  const result = await moviesBLL.deleteMovie(id);
  res.json(result);
});

module.exports = router;
