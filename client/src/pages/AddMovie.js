import {useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [geners, setGeners] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [premiered, setPremiered] = useState("");
  const [addMovies, setAddMovies] = useState();
  const navigate = useNavigate();

  const saveMovie = async () => {
    const [withoutTime] = premiered.split("T");
    const obj = {
      name: name,
      geners: geners,
      imgUrl: imgUrl,
      premired: withoutTime[0],
    };
    const resp = await axios.post("http://localhost:8001/movies", obj);
    console.log(resp);
  };

  useEffect(() => {
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      if (per.data.permissions.includes("Create Movies")) {
        setAddMovies(true);
      } else {
        setAddMovies(false);
        alert("you dont have permission to add movies");
      }
    };
    getPermissions();
  }, []);

  return (
    <>
      {addMovies && (
        <div>
          <br />
          Name: <input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          Genres:{" "}
          <input type="text" onChange={(e) => setGeners(e.target.value)} />{" "}
          <br />
          Image:{" "}
          <input type="text" onChange={(e) => setImgUrl(e.target.value)} />{" "}
          <br />
          Premiered:{" "}
          <input
            type="date"
            onChange={(e) => setPremiered(e.target.value)}
          />{" "}
          <br />
          <button onClick={saveMovie}> save</button>
          <button onClick={() => navigate("/Movies")}> cancel</button>
        </div>
      )}
    </>
  );
};
export default AddMovie;
