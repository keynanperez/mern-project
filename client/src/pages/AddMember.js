import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AddMember = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [email, setIEmail] = useState("");
  const [city, setCity] = useState("");

  const addMember = async (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      email: email,
      city: city,
    };
    const resp = await axios.post("http://localhost:8001/members/", obj);
    console.log(resp);
  };

  const cancel = async (e) => {
    e.preventDefault();
    navigate("/Subscriptions/");
  };
  return (
    <>
      <form onSubmit={(e) => addMember(e)}>
        <br />
        Name: <input
          type="text"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <br />
        Email: <input
          type="text"
          onChange={(e) => setIEmail(e.target.value)}
        />{" "}
        <br />
        City: <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <br />
        <br />
        <input type="submit" value="save" />{" "}
        <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
      </form>
    </>
  );
};
export default AddMember;
