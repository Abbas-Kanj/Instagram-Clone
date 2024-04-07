import React from "react";
import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex column justify-between h-full p align-left  sidebar">
      <div className="flex column justify-between h-half gap align-left">
        <h1 className="mg-bottom p">Instagram</h1>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Home
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Search
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Explore
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Reels
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Messages
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Notifications
        </button>
        <button className="flex center btn-style w-full p medium-font bg-black text-primary">
          <i className=""></i>Profile
        </button>
      </div>
      <div className="flex">
        <button className="flex center btn-style w-full p medium-font bg-black text-red">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
