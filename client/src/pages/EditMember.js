import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditMember = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [updateSubscriptions, setUpdateSubscriptions] = useState();
  const [member, setMember] = useState();

  useEffect(() => {
    const loadmember = async (id) => {
      const resp = await axios.get(
        "http://localhost:8001/members/" + params.id);
      setMember(resp.data);
      console.log(member);
    };
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId);
      if (per.data.permissions.includes("Update Subscriptions")) {
        setUpdateSubscriptions(true);
      } else {
        setUpdateSubscriptions(false);
        alert("you dont have permission to View Subscriptions");
      }
    };
    getPermissions();
    loadmember(params.id);
  }, []);

  const updateMovie = async (e) => {
    e.preventDefault();
    const obj = {
      name: member.name,
      email: member.email,
      city: member.city,
    };
    const resp = await axios.put("http://localhost:8001/members/" + params.id,obj);
    console.log(resp);
  };
  const cancel = async (e) => {
    e.preventDefault();
    navigate("/Subscriptions/");
  };

  return (
    <>
      {updateSubscriptions && (
        <>
          <h1>Edit Member : {member?.name}</h1>
          <form onSubmit={(e) => updateMovie(e)}>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={member?.name}
              onChange={(name) =>
                setMember({ ...member, name: name.target.value })
              }
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
              onChange={(city) =>
                setMember({ ...member, city: city.target.value })
              }
            />
            <br />
            <input type="submit" value="Update" />{" "}
            <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
          </form>
        </>
      )}
    </>
  );
};

export default EditMember;
