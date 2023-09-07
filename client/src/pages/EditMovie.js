import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditMovie = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const [editMovies, setEditMovies] = useState();

  useEffect(() => {
    const loadmovie = async (id) => {
      const resp = await axios.get("http://localhost:8001/movies/" + params.id);
      setMovie(resp.data);
      let prem = movie.premiered.split("T");
      setMovie({ ...movie, premiered: prem[0] });
      console.log(movie);
    };

    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      if (per.data.permissions.includes("Update Movies")) {
        setEditMovies(true);
      } else {
        setEditMovies(false);
        alert("you dont have permission to edit movies");
      }
    };
    getPermissions();
    loadmovie(params.id);
  }, []);

  const updateMovie = async (e) => {
    e.preventDefault();
    const obj = {
      name: movie.name,
      genres: movie.genres,
      image: movie.image,
      premiered: movie.premiered,
    };
    const resp = await axios.put(
      "http://localhost:8001/movies/" + params.id,
      obj
    );
    console.log(resp);
  };

  const cancel = async (e) => {
    e.preventDefault();
    navigate("/Movies/");
  };

  return (
    <>
      {editMovies && (
        <form onSubmit={(e) => updateMovie(e)}>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={movie?.name}
            onChange={(name) => setMovie({ ...movie, name: name.target.value })}
          />
          <br />
          Genres:{" "}
          <input
            type="text"
            name="name"
            value={movie?.genres}
            onChange={(genres) =>
              setMovie({ ...movie, genres: genres.target.value })
            }
          />
          <br />
          Image:{" "}
          <input
            type="text"
            name="image"
            value={movie?.image}
            onChange={(image) =>
              setMovie({ ...movie, image: image.target.value })
            }
          />
          <br />
          Premiered:{" "}
          <input
            type="date"
            name="date"
            value={movie?.premiered}
            onChange={(x) => setMovie({ ...movie, premiered: x.target.value })}
          />
          <br />
          <input type="submit" value="Update" />{" "}
          <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
        </form>
      )}
    </>
  );
};

export default EditMovie;
