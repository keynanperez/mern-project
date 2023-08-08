import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Member from "../components/Member";

const Subscriptions = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState();
  const [viewSubscriptions, setViewSubscriptions] = useState();

  useEffect(() =>{
    const getMembers = async () => {
      const mem = await axios.get("http://localhost:8001/members");
      setMembers(mem.data);
      console.log(members);
    };
    const getPermissions = async () => {
      const userId = sessionStorage["userId"];
      console.log(userId);
      const per = await axios.get(
        "http://localhost:8000/permissions/" + userId
      );
      // setPermissions(per.data.permissions);

      //return(per.data.permissions)
      if (per.data.permissions.includes("View Subscriptions")) {
        //alert("a")
        setViewSubscriptions(true);
      } else {
        setViewSubscriptions(false);
        alert("you dont have permission to View Subscriptions");
      }
    };
    getPermissions();
    getMembers()
  },[]);


  return (
    <>
    <h1> Subscriptions </h1>
      <button onClick={() => navigate("/Subscriptions")}> All Members</button>
      <button onClick={() => navigate("/AddMember")}>
        {" "}
        Add Member
      </button>
      {
        
        viewSubscriptions &&
        <>
      {members?.map((mem, index) => {
            return <Member data={mem} />;
          })
          }
          </>
      }
    </>
  );
};
export default Subscriptions;
