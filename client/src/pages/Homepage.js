import { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Movies from "./Movies";
import Subscriptions from "./Subscriptions";
import ManageUsers from "./ManageUsers";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import AddMember from "./AddMember";
import EditMember from "./EditMember";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import Login from "./Login";
import Register from "./Register";

import axios from "axios";

const Homepage = () => {
  const navigate = useNavigate();

  const authUser = async () => {
    const accessToken = sessionStorage["accessToken"];
    console.log(accessToken);
    const obj = { token: accessToken};
    const resp = await axios.post("http://localhost:8000/auth/verify", obj);
    console.log(resp.data)
    if(resp.data==true)
    
    {
      return(true)}
    else{
    return(false)
    }
    
  };
  const isUserAdmin =  () => {
    const userName =  sessionStorage["userName"];
    if (userName==="Admin")
    {
      return (true)

    }
else{return (false)}
  }
  const [userAuth, setUserAuth] = useState(authUser());
  const [isAdmin, setIsAdmin] = useState(isUserAdmin());

  console.log(userAuth)

  

  const logOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");


    navigate('/Login')
  };
  return (
    <div>
     {
      userAuth &&  
      <>
      <h1>Movies - Subscriptions Web Site</h1>

      
      hello, {sessionStorage["userName"]}{"  "}

      <button onClick={logOut}>log out</button>
      <br />
      <Link to="/Movies">Movies</Link> {"  "}
      <Link to="/Subscriptions">Subscriptions</Link> {"  "}
      {
      userAuth && isAdmin &&
      <>
      <Link to="/ManageUsers">Users Managment</Link> {"  "}
      </>
      }

     
      <br />
      <Routes>
        <Route path="/Movies" element={<Movies />} />
        <Route path="AddMovie" element={<AddMovie />} />
        <Route path="EditMovie/:id" element={<EditMovie />} />

        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="AddMember" element={<AddMember />} />
        <Route path="EditMember/:id" element={<EditMember />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/ManageUsers" element={<ManageUsers />}/>
          <Route path="AddUser" element={<AddUser />} />
          <Route path="EditUser/:id" element={<EditUser />} />
        
      </Routes>
      </>
      }
    </div>
  );
};

export default Homepage;
