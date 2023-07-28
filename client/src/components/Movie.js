import React from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const Movie = (props) => {
    const navigate = useNavigate();

  const date = props.data.premiered;
  const [withoutTime] = date.split("T");
  const EditMovie = ()=>{
    navigate('/EditMovie/'+props.data._id
    )
  }
  const DeleteMovie = async()=>{
    
       
        const resp = await axios.delete("http://localhost:8001/movies/"+props.data._id);
        alert(resp);
    
      };
    
  
  return (
    <div>
      name: {props.data.name}
      <br />
      genres:{" "}
      {props.data.genres?.map((x, index) => {
        return x + " ";
      })}
      <br />
      <img src={props.data.image} alt={props.image} />
      <br />
      premiered: {withoutTime}
      <br />
      <button onClick={EditMovie}>Edit</button>
      <button onClick={DeleteMovie}>Delete</button>
    </div>
  );

};
export default Movie;
