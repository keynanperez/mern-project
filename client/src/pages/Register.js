import {useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    const obj = { username: username, password: password };
    const resp = await axios.post("http://localhost:8000/users", obj);
    let permissions = [];
    const perObj = {
      id: resp.data,
      permissions: permissions,
    };
    const userObj = {
      id: resp.data,
      firstName: username,
      lastName: username,
      createDate: "",
      sessionTimeout: "",
    };
    const respPermissions = await axios.post("http://localhost:8000/permissions/",perObj);
    console.log(respPermissions);
    const respUser = await axios.post("http://localhost:8000/user/", userObj);
    console.log(respUser);
  };

  return (
    <div>
      <br />
      username:{" "}
      <input type="text" onChange={(e) => setUsername(e.target.value)} /> <br />
      password:{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br />
      <br />
      <button onClick={registerUser}> save</button>
      <button onClick={() => navigate("/Login")}> cancel</button>
    </div>
  );
};
export default Register;
