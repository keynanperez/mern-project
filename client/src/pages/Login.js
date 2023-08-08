import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';

import {
  Routes,
  Route,
  Link,
  useOutletContext,
  Outlet,
  useNavigate,
} from "react-router-dom";
const usersUrl = "http://localhost:8000/auth/login";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      const obj = { username: username, password: password };
      const resp = await axios.post(usersUrl, obj);
      console.log(resp.data.accessToken);

      sessionStorage["accessToken"] = resp.data.accessToken;
      sessionStorage["userName"] = username;

      navigate("/Homepage");
    } else alert("Username is mandatory!");
  };

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Username:{" "}
        <input type="text" onInput={(e) => setUsername(e.target.value)} />{" "}
        <br />
        Password:{" "}
        <input type="text" onInput={(e) => setPassword(e.target.value)} />{" "}
        <br />
        <Button variant="light" onClick={handleSubmit} type="submit">
          Send
        </Button>
      </form>
      New user? :       <Link to="/Register">Create Account</Link> {"  "}

      
    </div>
  );
};
export default Login;
