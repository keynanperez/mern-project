import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState();
  const [viewMovies, setViewMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const mov = await axios.get("http://localhost:8001/movies");
      setMovies(mov.data);
    };

    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get("http://localhost:8000/permissions/" + userId);
      if (per.data.permissions.includes("View Movies")) {
        setViewMovies(true);
      } else {
        setViewMovies(false);
        alert("you dont have permission to view movies");
      }
    };
    getPermissions();
    getMovies();
  }, []);

  return (
    <>
      <button onClick={() => navigate("/Movies")}> All Movies</button>
      <button onClick={() => navigate("/AddMovie")}> Add Movie</button>
      {viewMovies && (
        <>
          {movies?.map((mov, index) => {
            return <Movie data={mov} />;
          })}
        </>
      )}
    </>
  );
};
export default Movies;
