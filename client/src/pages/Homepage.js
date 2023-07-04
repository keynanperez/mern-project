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

const Homepage = () => {
  /* useEffect(() => {

  },[]);
   */

  return (
    <div>
      homepage
      <br />
      <Link to="/Movies">Movies</Link> <br />
      <Link to="/Subscriptions">Subscriptions</Link> <br />
      <Link to="/ManageUsers">Users Managment</Link> <br />
      <Routes>
        <Route path="/Movies" element={<Movies />}>
          <Route path="AddMovie" element={<AddMovie />} />
          <Route path="EditMovie" element={<EditMovie />} />
        </Route>
        <Route path="/Subscriptions" element={<Subscriptions />}>
          <Route path="AddMember" element={<AddMember />} />
          <Route path="EditMember" element={<EditMember />} />
        </Route>

        <Route path="/ManageUsers" element={<ManageUsers />}>
          <Route path="AddUser" element={<AddUser />} />
          <Route path="EditUser" element={<EditUser />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Homepage;
