const axios = require("axios");

const membersBLL = require("../BLL/membersBLL");
const moviesBLL = require("../BLL/moviesBLL");

const moviesUrl = "https://api.tvmaze.com/shows";
const membersUrl = "https://jsonplaceholder.typicode.com/users";

const getAllMovies = async () => {
  const { data } = await axios.get(moviesUrl);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    let mov = {
      name: data[i].name,
      genres: data[i].genres,
      image: data[i].image.medium,
      premiered: data[i].premiered,
    };
    await moviesBLL.addMovie(mov);
  }
  return data;
};
const getAllMembers = async () => {
  const { data } = await axios.get(membersUrl);

  for (let i = 0; i < data.length; i++) {
    let memb = {
      name: data[i].name,
      email: data[i].email,
      city: data[i].address.city,
    };
    await membersBLL.addMember(memb);
  }

  return data;
};

module.exports = { getAllMovies, getAllMembers };
