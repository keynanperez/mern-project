const Movie = require('../models/moviesModel');

// GET - Get All - Read
const getAllMovies = () => {
  return Movie.find({});
};

// GET - Get By ID - Read
const getMovieById = (id) => {
  return Movie.findById({ _id: id });
};

// Post - Create a new Movie - Create
const addMovie = async (obj) => {
  const us = new Movie(obj);
  await us.save();
  return 'Created!';
};

// PUT - Update a Movie - Update
const updateMovie = async (id, obj) => {
  await Movie.findByIdAndUpdate(id, obj);
  return 'Updated!';
};

// DELETE - Delete a Movie - Delete
const deleteMovie = async (id) => {
  await Movie.findByIdAndDelete(id);
  return 'Deleted!';
};

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
