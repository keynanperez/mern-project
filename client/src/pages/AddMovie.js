import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [geners, setGeners] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [premired, setPremired] = useState("");

  return (
    <div>
      <br />
      Name: <input type="text" onChange={(e) => setName(e.target.value)} />{" "}
      <br />
      Name: <input
        type="text"
        onChange={(e) => setGeners(e.target.value)}
      />{" "}
      <br />
      Name: <input
        type="text"
        onChange={(e) => setImgUrl(e.target.value)}
      />{" "}
      <br />
      Name: <input
        type="date"
        onChange={(e) => setPremired(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={() => console.log(name)}> save</button>
      <button onClick={() => console.log(premired)}> cancel</button>
    </div>
  );
};
export default AddMovie;
