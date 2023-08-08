import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  //const [userName, setUserName] = useState(sessionStorage["userName"]);

  const [vSubs, setVSubs] = useState();
  const [cSubs, setCSubs] = useState();
  const [dSubs, setDSubs] = useState();
  const [uSubs, setUSubs] = useState();
  const [vMovies, setVMovies] = useState();
  const [cMovies, setCMovies] = useState();
  const [dMovies, setDMovies] = useState();
  const [uMovies, setUMovies] = useState();

  //console.log(params);
  useEffect(() => {
    const loadUser = async (id) => {
      const resp = await axios.get("http://localhost:8000/user/" + params.id);
      setUser(resp.data);
      //console.log(user);
    }
      const loadPermissions = async (id) => {
        
      const respPermissions = await axios.get("http://localhost:8000/permissions/" + params.id);
      console.log(respPermissions.data.permissions);
      setVSubs(respPermissions.data.permissions.includes("View Subscriptions"))
      setCSubs(respPermissions.data.permissions.includes("Create Subscriptions"))
      setDSubs(respPermissions.data.permissions.includes("Delete Subscriptions"))
      setUSubs(respPermissions.data.permissions.includes("Update Subscriptions"))
      setVMovies(respPermissions.data.permissions.includes("View Movies"))
      setCMovies(respPermissions.data.permissions.includes("Create Movies"))
      setDMovies(respPermissions.data.permissions.includes("Delete Movies"))
      setUMovies(respPermissions.data.permissions.includes("Update Movies"))


    };

    loadUser(params.id);
    loadPermissions(params.id)
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const resp = await axios.put( "http://localhost:8000/user/" + params.id,user );
    console.log(resp);

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
      id: params.id,

      permissions: permissions,
    };
    const respPermissions = await axios.put( "http://localhost:8000/permissions/" + params.id,perObj );
    console.log(respPermissions);
  };
  const cancel = async (e) => {

    e.preventDefault();
    navigate("/ManageUsers/");
  };

  return (
    <>
      <h1>Edit User : {user?.firstName}</h1>
      <form onSubmit={(e) => updateUser(e)}>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={user?.firstName}
          onChange={(firstName) =>
            setUser({ ...user, firstName: firstName.target.value })
          }
        />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={user?.lastName}
          onChange={(lastName) =>
            setUser({ ...user, lastName: lastName.target.value })
          }
        />
        <br />
        
        Session Timeout:{" "}
        <input
          type="text"
          name="sessionTimeout"
          value={user?.sessionTimeout}
          onChange={(sessionTimeout) =>
            setUser({ ...user, sessionTimeout: sessionTimeout.target.value })
          }
        />
        <br />
        Created date:{" "}
        <input
          type="text"
          name="createDate"
          value={user?.createDate}
          onChange={(createDate) =>
            setUser({ ...user, createDate: createDate.target.value })
          }
        />
        <br />
        permission <br />
        View Subscription:{" "}
        <input
          type="checkbox"
          checked={vSubs}
          onChange={(e) => setVSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Create Subscriptions:{" "}
        <input
          type="checkbox"
          checked={cSubs}
          onChange={(e) => setCSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Delete Subscriptions:{" "}
        <input
          type="checkbox"
          checked={dSubs}
          onChange={(e) => setDSubs(e.target.checked)}
        ></input>{" "}
        <br />
        Update Subscription:{" "}
        <input
          type="checkbox"
          checked={uSubs}
          onChange={(e) => setUSubs(e.target.checked)}
        ></input>{" "}
        <br />
        View Movies:{" "}
        <input
          type="checkbox"
          checked={vMovies}
          onChange={(e) => setVMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Create Movies:{" "}
        <input
          type="checkbox"
          checked={cMovies}
          onChange={(e) => setCMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Delete Movies:{" "}
        <input
          type="checkbox"
          checked={dMovies}
          onChange={(e) => setDMovies(e.target.checked)}
        ></input>{" "}
        <br />
        Update Movie:{" "}
        <input
          type="checkbox"
          checked={uMovies}
          onChange={(e) => setUMovies(e.target.checked)}
        ></input>{" "}
        <br />
        <br />
        <input type="submit" value="Update" />{" "}
        <input type="button" value="Cancel" onClick={(e) => cancel(e)} />{" "}
      </form>
    </>
  );
};

export default EditUser;
