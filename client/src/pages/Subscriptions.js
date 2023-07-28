import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Member from "../components/Member";

const Subscriptions = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState();

  useEffect(() =>{
    const getMembers = async () => {
      const mem = await axios.get("http://localhost:8001/members");
      setMembers(mem.data);
      console.log(members);
    };
    getMembers()
  },[]);


  return (
    <>
      <button onClick={() => navigate("/Subscriptions")}> All Members</button>
      <button onClick={() => navigate("/Subscriptions/AddMember")}>
        {" "}
        Add Member
      </button>
      {members?.map((mem, index) => {
            return <Member data={mem} />;
          })
          }

    </>
  );
};
export default Subscriptions;
