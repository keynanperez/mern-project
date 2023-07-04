import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const AddMember = () => {
  const [name, setName] = useState("");

  const [email, setIEmail] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <br />
      Name: <input type="text" onChange={(e) => setName(e.target.value)} />{" "}
      <br />
      Email: <input
        type="text"
        onChange={(e) => setIEmail(e.target.value)}
      />{" "}
      <br />
      City: <input type="text" onChange={(e) => setCity(e.target.value)} />{" "}
      <br />
      <br />
      <button onClick={() => console.log(name)}> save</button>
      <button onClick={() => console.log(email)}> cancel</button>
    </>
  );
};
export default AddMember;
