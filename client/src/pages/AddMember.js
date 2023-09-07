import {useNavigate } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";

const AddMember = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [createSubscriptions, setCreateSubscriptions] = useState();
  const [email, setIEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      if (per.data.permissions.includes("Create Subscriptions")) {
        setCreateSubscriptions(true);
      } else {
        setCreateSubscriptions(false);
        alert("you dont have permission to Add Member");
      }
    };
    getPermissions();
  }, []);
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
      {createSubscriptions && (
        <>
          <form onSubmit={(e) => addMember(e)}>
            <br />
            Name:{" "}
            <input type="text" onChange={(e) => setName(e.target.value)} />{" "}
            <br />
            Email:{" "}
            <input
              type="text"
              onChange={(e) => setIEmail(e.target.value)}
            />{" "}
            <br/>
            City:{" "}
            <input type="text" onChange={(e) => setCity(e.target.value)} />{" "}
            <br/>
            <input type="submit" value="save" />{" "}
            <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
          </form>
        </>
      )}
    </>
  );
};
export default AddMember;
