import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [sessionTime, setSessionTime] = useState("");

  const [vSubs, setVSubs] = useState(false);
  const [cSubs, setCSubs] = useState(false);
  const [dSubs, setDSubs] = useState(false);
  const [uSubs, setUSubs] = useState(false);
  const [vMovies, setVMovies] = useState(false);
  const [cMovies, setCMovies] = useState(false);
  const [dMovies, setDMovies] = useState(false);
  const [uMovies, setUMovies] = useState(false);

  return (
    <>
      <br />
      First Name:{" "}
      <input type="text" onChange={(e) => setFirstName(e.target.value)} />{" "}
      <br />
      Last Name:{" "}
      <input type="text" onChange={(e) => setLastName(e.target.value)} /> <br />
      User Name:{" "}
      <input type="text" onChange={(e) => setUserName(e.target.value)} /> <br />
      User Name:{" "}
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
      <button onClick={() => console.log(firstName)}> save</button>
      <button onClick={() => console.log(lastName)}> cancel</button>
    </>
  );
};
export default AddUser;
