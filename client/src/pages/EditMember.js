import React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useOutletContext,
  Outlet,
  useParams,
} from "react-router-dom";
import axios from "axios";

const EditMember = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [member, setMember] = useState();

  console.log(params);
  useEffect(() => {
    const loadmember = async (id) => {
      const resp = await axios.get(
        "http://localhost:8001/members/" + params.id
      );
      setMember(resp.data);

      console.log(member);
    };

    loadmember(params.id);
  }, []);

  const updateMovie = async (e) => {
    e.preventDefault();
    const obj = {
      name: member.name,
      email: member.email,
      city: member.city,
    };
    const resp = await axios.put(
      "http://localhost:8001/members/" + params.id,
      obj
    );
    console.log(resp);
  };
  const cancel = async (e) => {
    e.preventDefault();
    navigate("/Subscriptions/");
  };

  return (
    <>
      <h1>Edit Member : {member?.name}</h1>
      <form onSubmit={(e) => updateMovie(e)}>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={member?.name}
          onChange={(name) => setMember({ ...member, name: name.target.value })}
        />
        <br />
        Email:{" "}
        <input
          type="text"
          name="email"
          value={member?.email}
          onChange={(email) =>
            setMember({ ...member, email: email.target.value })
          }
        />
        <br />
        City:{" "}
        <input
          type="text"
          name="city"
          value={member?.city}
          onChange={(city) => setMember({ ...member, city: city.target.value })}
        />
        <br />
        <input type="submit" value="Update" />{" "}
        <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
      </form>
    </>
  );
};

export default EditMember;
