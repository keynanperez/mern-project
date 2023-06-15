const axios = require('axios');



const moviesUrl = 'https://api.tvmaze.com/shows';
const membersUrl = 'https://jsonplaceholder.typicode.com/users';

const getAllMovies = async () => {
  const resp = await axios.get(moviesUrl);
  //console.log(resp.data);
  //console.log(resp.status);
  return resp;
;}
const getAllMembers = async () => {
  const resp = await axios.get(membersUrl);
 //console.log(resp.data);
  //console.log(resp.status);
  return resp;

;}

module.exports = { getAllMovies, getAllMembers };