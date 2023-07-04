import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect, button } from "react";
import axios from "axios";
const Movies = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState();
  /*
    useEffect(() =>{
        getMovies()
    });   
*/
  const getMovies = async () => {
    const mov = await axios.get("http://localhost:8001/movies");
    setMovies(mov.data);
    console.log(movies);
  };
  return (
    <>
      <button onClick={() => navigate("/Movies")}> Movies</button>
      <button onClick={() => navigate("/Movies/AddMovie")}> Add Movie</button>
      <Outlet />
    </>
  );
};
export default Movies;
