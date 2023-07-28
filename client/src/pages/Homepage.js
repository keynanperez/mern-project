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


const Homepage = () => {
  /* useEffect(() => {

  },[]);
   */
const logOut = ()=>{

}
  return (
    <div>
      <h1>Movies - Subscriptions Web Site</h1>
      <br />
      <Link to="/Movies">Movies</Link> {"  "}
      <Link to="/Subscriptions">Subscriptions</Link> {"  "}
      <Link to="/ManageUsers">Users Managment</Link> {"  "}
      <button onClick={logOut}>log out</button><br />
      <Routes>


        <Route path="/Movies" element={<Movies />}/>
          <Route path="AddMovie" element={<AddMovie />} />
          <Route path="EditMovie/:id" element={<EditMovie />} />

        <Route path="/Subscriptions" element={<Subscriptions />}/>
          <Route path="AddMember" element={<AddMember />} />
          <Route path="EditMember/:id" element={<EditMember />} />
      
        <Route path="/Login" element={<Login />}/>

        <Route path="/ManageUsers" element={<ManageUsers />}>
          <Route path="AddUser" element={<AddUser />} />
          <Route path="EditUser" element={<EditUser />} />
        </Route>


      </Routes>
    </div>
  );
};

export default Homepage;
