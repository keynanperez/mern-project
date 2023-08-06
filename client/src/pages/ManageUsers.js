import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";

const ManageUsers = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState();

  useEffect(() => {


    const getUsers = async () => {
      const us = await axios.get("http://localhost:8000/user");
      setUsers(us.data);
      
      console.log(users);
    };
   getUsers();

  }, []);
  return (
    <>
      <button onClick={() => navigate("/ManageUsers")}> Users</button>
      <button onClick={() => navigate("/ManageUsers/AddUser")}>
        {" "}
        Add User
      </button>
      {users?.map((us, index) => {
            return <User data={us} />;
          })
          }
    </>
  );
};
export default ManageUsers;
