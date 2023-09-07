import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "../components/User";

const ManageUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState();
 
  const authUser = async () => {
    const accessToken = sessionStorage["accessToken"];
    const obj = { token: accessToken };
    const resp = await axios.post("http://localhost:8000/auth/verify", obj);
    console.log(resp.data);
    if (resp.data == true) {
      return true;
    } else {
      return false;
    }
  };

  const isUserAdmin = () => {
    const userName = sessionStorage["userName"];
    if (userName === "Admin") {
      return true;
    } else {
      alert("Only Admin Can Manage Users");
      return false;
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const us = await axios.get("http://localhost:8000/user");
      setUsers(us.data);

      console.log(users);
    };
    getUsers();
  }, []);

  const [userAuth, setUserAuth] = useState(authUser());
  const [isAdmin, setIsAdmin] = useState(isUserAdmin());
  
  return (
    <>
      {userAuth && isAdmin && (
        <>
          <button onClick={() => navigate("/ManageUsers")}> Users</button>
          <button onClick={() => navigate("/AddUser")}> Add User</button>
          {users?.map((us, index) => {
            return <User data={us} />;
          })}
        </>
      )}
    </>
  );
};
export default ManageUsers;
