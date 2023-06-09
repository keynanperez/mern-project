import { useState } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
const usersUrl = "http://localhost:8000/users";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username) {
      const obj = { username: username, password: password };
      const resp = await axios.post(usersUrl, obj);
      console.log(resp.data);
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
        <button onClick={handleSubmit} type="submit">
          Send
        </button>
      </form>
      New user? : <Link>Create Account</Link>
    </div>
  );
};
export default Login;
