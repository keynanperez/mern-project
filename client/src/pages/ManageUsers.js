import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
const ManageUsers = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/ManageUsers")}> Users</button>
      <button onClick={() => navigate("/ManageUsers/AddUser")}>
        {" "}
        Add User
      </button>
      <Outlet />
    </>
  );
};
export default ManageUsers;
