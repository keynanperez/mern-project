import { Link, useNavigate, useOutletContext, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const Subscriptions = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/Subscriptions")}> All Members</button>
      <button onClick={() => navigate("/Subscriptions/AddMember")}>
        {" "}
        Add Member
      </button>
      <Outlet />
    </>
  );
};
export default Subscriptions;
