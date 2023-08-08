import React from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Member = (props) => {
  const navigate = useNavigate();
  //console.log(props);
  const [subscriptions, setSubscriptions] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [myMovies, setMyMovies] = useState();
  const [movies, setMovies] = useState();
  const [moviesArr, setMoviesArr] = useState();
  const [deleteSubscriptions, setDeleteSubscriptions] = useState();

  const todayDate = new Date();
  const [withoutTime] = todayDate.toISOString().split("T");

  useEffect(() => {
    const getMovies = async () => {
      const mov = await axios.get("http://localhost:8001/movies");
      setMovies(mov.data);
      //console.log(movies);
    };

    const getSubscriptions = async () => {
      const sub = await axios.get("http://localhost:8001/subscriptions");
      let userSub = sub.data.filter((x) => x.MemberId === props.data._id);
      //console.log(userSub);

      setSubscriptions(userSub);
      //console.log(subscriptions);
    };
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      // setPermissions(per.data.permissions);

      //return(per.data.permissions)
      if (per.data.permissions.includes("Delete Subscriptions")) {
        //alert("a")
        setDeleteSubscriptions(true);
      } else {
        setDeleteSubscriptions(false);
        alert("you dont have permission to View Subscriptions");
      }
    };
    getPermissions();
    getMovies();
    getSubscriptions();

    const getMovieName = () => {
      //console.log(id);
      console.log(movies);
      console.log(subscriptions);

      if (subscriptions) {
        let moviesArray = [];
        for (let index = 0; index < subscriptions.length; index++) {
          let mov = movies.filter(
            (x) => x._id === subscriptions[index].movies[0].movieId
          );
          console.log(mov);
          moviesArray.push(mov[0].name);
        }
        console.log(moviesArray);
        setMoviesArr(moviesArray);
        // subscriptions.forEach(x => {
        // let mov =  movies.filter((x) => x._id === id);
        // });
        //let mov =  movies.filter((x) => x._id === id);
        // console.log(mov);
        //return mov.name;
      }
    };
    getMovieName();
    const interval = setInterval(() => {
      //console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const EditMember = () => {
    navigate("/EditMember/" + props.data._id);
  };
  const DeleteMember = async () => {
    if (deleteSubscriptions) {
    const resp = await axios.delete(
      "http://localhost:8001/subscriptions/" + props.data._id
    );
    alert(resp);
  } else {
    alert("you dont have permission to delete member");
  }
  };
  const SubsribeMovie = () => {
    setIsVisible(!isVisible);
  };
  const SubsribeNewMovie = async () => {
    let mov = [{ movieId: myMovies, date: withoutTime }];
    let obj = {
      MemberId: props?.data?._id,
      movies: mov,
    };
    const resp = await axios.post("http://localhost:8001/subscriptions", obj);
    // console.log(resp);
  };

  return (
    <div style={cardStyles.container}>
      <h1>{props?.data?.name}</h1>
      <br />
      <h2> Email: {props?.data?.email}</h2>
      <br />
      <h2>City: {props?.data?.city}</h2>
      <br />
      <button onClick={EditMember}>Edit</button>
      <button onClick={DeleteMember}>Delete</button>
      <br />

      <div style={cardStyles.container}>
        <h2>Movies watched</h2>
        <br />
        <button onClick={SubsribeMovie}>Subscride to new movie</button> <br />
        {isVisible && (
          <div style={cardStyles.container}>
            <h3> Add a new movie </h3>
            <br />
            <select name="movie" onChange={(x) => setMyMovies(x.target.value)}>
              <option value="" defaultValue>
                Select Movie
              </option>
              {movies.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })}
            </select>{" "}
            {withoutTime}
            <br />
            <button onClick={SubsribeNewMovie}>Subscride</button> <br />
          </div>
        )}
        <div style={cardStyles.container}>
          {subscriptions?.map((sub, index) => {
            return (
              <div>
                <Link to={`/EditMovie/${sub.movies[0].movieId}`}>
                  {sub?.movies[0].movieId}
                </Link>
                {"  "}Watch date: {sub?.movies[0].date}
              </div>
            );
          })}
        </div>
      </div>
      <br />
    </div>
  );
};
export default Member;
const cardStyles = {
  container: {
    border: "5px solid black",
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
};
