import React from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";

const User = (props) => {
    const navigate = useNavigate();

  
  const EditUser = ()=>{
    navigate('/EditUser/'+props.data.id
    )
  }
  const DeleteUser = async()=>{
    
       
        const resp = await axios.delete("http://localhost:8000/user/"+props.data.id);
        alert(resp);
    
      };
    
  
  return (
    <div style={cardStyles.container}>

      name: {props.data.firstName}{" "}{props.data.lastName}
      <br />
     
      <button onClick={EditUser}>Edit</button>
      <button onClick={DeleteUser}>Delete</button>
    </div>
  );

};
export default User;
const cardStyles = {
  container: {
    border: "5px solid black",
    boxShadow: "0 0 3px 2px #cec7c759",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
  },
};
