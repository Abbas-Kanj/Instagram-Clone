import React from "react";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="flex h-full sidebar">
      <div>
        <h1>Instagram</h1>
        <button><i className=""></i>Home</button>
        <button><i className=""></i>Search</button>
        <button><i className=""></i>Explore</button>
        <button><i className=""></i>Reels</button>
        <button><i className=""></i>Messages</button>
        <button><i className=""></i>Notifications</button>
        <button><i className=""></i>Profile</button>
      </div>
      <button>Logout</button>
    </div>
  );
};

export default Sidebar;
