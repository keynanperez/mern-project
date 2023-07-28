import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

const Movies = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState();

    useEffect(() =>{
      const getMovies = async () => {
        const mov = await axios.get("http://localhost:8001/movies");
        setMovies(mov.data);
        console.log(movies);
      };
        getMovies()
    },[]);   


  

  return (
    <>
      <button onClick={() => navigate("/Movies")}> All Movies</button>
      <button onClick={() => navigate("/AddMovie")}> Add Movie</button>
      
        
          {movies?.map((mov, index) => {
            return <Movie data={mov} />;
          })
          }


        


     

    </>
  );
};
export default Movies;
