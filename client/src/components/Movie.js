import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Movie = (props) => {
  const navigate = useNavigate();

  const date = props.data.premiered;
  const [withoutTime] = date.split("T");
  const EditMovie = () => {
    navigate("/EditMovie/" + props.data._id);
  };
  const [deleteMovies, setDeleteMovies] = useState();

  useEffect(() => {
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      // setPermissions(per.data.permissions);

      //return(per.data.permissions)
      if (per.data.permissions.includes("Delete Movies")) {
        //alert("a")
        setDeleteMovies(true);
      } else {
        setDeleteMovies(false);
      }
    };
    getPermissions();
  }, []);
  const DeleteMovie = async () => {
    if (deleteMovies) {
      const resp = await axios.delete(
        "http://localhost:8001/movies/" + props.data._id
      );
      alert(resp);
    } else {
      alert("you dont have permission to delete movies");
    }
  };

  return (
    <div>
      name: {props.data.name}
      <br />
      genres:{" "}
      {props.data.genres?.map((x, index) => {
        return x + " ";
      })}
      <br />
      <img src={props.data.image} alt={props.image} />
      <br />
      premiered: {withoutTime}
      <br />
      <button onClick={EditMovie}>Edit</button>
      <button onClick={DeleteMovie}>Delete</button>
    </div>
  );
};
export default Movie;
