import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [userId, setUserId] = useState();
  const [users, setUsers] = useState();

  const [vSubs, setVSubs] = useState(false);
  const [cSubs, setCSubs] = useState(false);
  const [dSubs, setDSubs] = useState(false);
  const [uSubs, setUSubs] = useState(false);
  const [vMovies, setVMovies] = useState(false);
  const [cMovies, setCMovies] = useState(false);
  const [dMovies, setDMovies] = useState(false);
  const [uMovies, setUMovies] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const us = await axios.get("http://localhost:8000/user");
      setUsers(us.data);
      let num = users.length;
      setUserId(num+1);
      //console.log(users);
      //console.log(userId);
    };
   //getUsers();
  }, []);

  
  const cancel = async (e) => {

    e.preventDefault();
    navigate("/ManageUsers/");
  };


  const addUser = async (e) => {
    e.preventDefault();
    const obj = { username: userName, password: userName};
    const resp = await axios.post("http://localhost:8000/users", obj);
    let permissions = [];
    if (vSubs) permissions.push("View Subscriptions");
    if (cSubs) permissions.push("Create Subscriptions");
    if (dSubs) permissions.push("Delete Subscriptions");
    if (uSubs) permissions.push("Update Subscriptions");
    if (vMovies) permissions.push("View Movies");
    if (cMovies) permissions.push("Create Movies");
    if (dMovies) permissions.push("Delete Movies");
    if (uMovies) permissions.push("Update Movies");
    const perObj = {
      id: resp.data,
      permissions: permissions,
    };
    console.log(perObj);
    const todayDate = new Date();
    const [withoutTime] = todayDate.toISOString().split("T");
    //console.log(withoutTime);
    const userObj = {
      id: resp.data,
      firstName: firstName,
      lastName: lastName,
      createDate: withoutTime,
      sessionTimeout: sessionTime,
    };
    
    console.log(resp.data)
    const respPermissions = await axios.post("http://localhost:8000/permissions/",perObj);
    //console.log(respPermissions);
    const respUser = await axios.post("http://localhost:8000/user/", userObj);
    console.log(respUser);
  };


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
else{
  alert("Only Admin Can Add Users")
  return (false)}
  }
  const [userAuth, setUserAuth] = useState(authUser());
  const [isAdmin, setIsAdmin] = useState(isUserAdmin());

  return (
    <>
    {
      userAuth && isAdmin &&
      <>
      <form onSubmit={(e) => addUser(e)}>
        <br />
        First Name:{" "}
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />{" "}
        <br />
        Last Name:{" "}
        <input type="text" onChange={(e) => setLastName(e.target.value)} />{" "}
        <br />
        User Name:{" "}
        <input type="text" onChange={(e) => setUserName(e.target.value)} />{" "}
        <br />
        Session Time (Minutes):{" "}
        <input
          type="text"
          onChange={(e) => setSessionTime(e.target.value)}
        />{" "}
        <br />
        permission <br />
        View Subscription:{" "}
        <input
          type="checkbox"
          onChange={(e) => setVSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Create Subscriptions:{" "}
        <input
          type="checkbox"
          onChange={(e) => setCSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Delete Subscriptions:{" "}
        <input
          type="checkbox"
          onChange={(e) => setDSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Update Subscription:{" "}
        <input
          type="checkbox"
          onChange={(e) => setUSubs(e.target.checked)}
        ></input>{" "}
        <br />
        View Movies:{" "}
        <input
          type="checkbox"
          onChange={(e) => setVMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Create Movies:{" "}
        <input
          type="checkbox"
          onChange={(e) => setCMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Delete Movies:{" "}
        <input
          type="checkbox"
          onChange={(e) => setDMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Update Movie:{" "}
        <input
          type="checkbox"
          onChange={(e) => setUMovies(e.target.checked)}
        ></input>{" "}
        <br />
        <br />
        <input type="submit" value="save" />{" "}
        <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
      </form>
      </>
     }
    </>
  );
};
export default AddUser;
