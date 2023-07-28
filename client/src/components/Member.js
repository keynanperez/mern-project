import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Member = (props) => {
  const navigate = useNavigate();
  console.log(props);
  const [subscriptions, setSubscriptions] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [myMovies, setMyMovies] = useState();
  const [movies, setMovies] = useState();

  useEffect(() =>{
    const getMovies = async () => {
      const mov = await axios.get("http://localhost:8001/movies");
      setMovies(mov.data);
      console.log(movies);
    };
      getMovies()
  },[]);   

  /*
  useEffect(() =>{
    const getSubscriptions = async () => {
      const sub = await axios.get("http://localhost:8001/subscriptions");
      setSubscriptions(sub.data);
      console.log(subscriptions);
    };
      getSubscriptions()
  },[]);   
*/
  const EditMember = () => {
    navigate("/EditMember/" + props.data._id);
  };
  const DeleteMember = async () => {
    const resp = await axios.delete(
      "http://localhost:8001/members/" + props.data._id
    );
    alert(resp);
  };
  const SubsribeMovie = () => {
    setIsVisible(!isVisible);
  };
  const SubsribeNewMovie = () => {
  };
  

  return (
    <div>
      name: {props?.data?.name}
      <br />
      email: {props?.data?.email}
      <br />
      city: {props?.data?.city}
      <br />
      <div style={cardStyles.bio}>
        <h2>Movies watched</h2>
        <br />
        <button onClick={SubsribeMovie}>Subscride to new movie</button> <br />
        {isVisible && (
          <div>
            <h3> Add a new movie </h3>
             <br />
            <select name="movie" onChange={(x) => setMyMovies(x.target.value)}>
              <option value="" defaultValue>
                Select Movie
              </option>
              {movies.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>{" "}
            <button onClick={SubsribeNewMovie}>Subscride</button> <br />

          </div>
        )}
        {/* 

        {subscriptions?.map((sub, index) => {
            return ;
          })
          }
*/}
      </div>
      <br />
      <button onClick={EditMember}>Edit</button>
      <button onClick={DeleteMember}>Delete</button>
    </div>
  );
};
export default Member;
const cardStyles = {
  container: {
    display: "flex",
    height: 100,
    width: 400,
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
  profilePicture: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    color: "white",
    height: 20,
    width: 20,
    borderRadius: "50%",
    padding: 10,
    fontWeight: "bold",
  },
  bio: {
    marginLeft: 10,
  },
  userName: {
    fontWeight: "bold",
  },
};
