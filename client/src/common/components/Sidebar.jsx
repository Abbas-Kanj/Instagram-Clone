import React from "react";
import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex column justify-between h-full p align-left  sidebar">
      <div className="flex column gap sidebar-children">
        <h2 className="mg-bottom p">Instagram</h2>
        <div className="flex column gap h-full w-full sidebar-nav">
          <button
            className="flex  btn-style p w-full medium-font bg-black text-primary"
            onClick={() => navigate("../Home")}
          >
            <GoHome />
            Home
          </button>
          <button className="flex  btn-style w-full p medium-font bg-black text-primary">
            <IoIosSearch />
            Search
          </button>
          <button className="flex  btn-style w-full p medium-font bg-black text-primary">
            <MdOutlineExplore />
            Explore
          </button>
          <button className="flex  btn-style w-full p medium-font bg-black text-primary">
            <TfiVideoClapper />
            Reels
          </button>
          <button className="flex  btn-style w-full p medium-font bg-black text-primary">
            <BiMessageSquareDetail />
            Messages
          </button>
          <button className="flex  btn-style w-full p medium-font bg-black text-primary">
            <FaRegHeart />
            Notifications
          </button>
          <button
            className="flex  btn-style w-full p medium-font bg-black text-primary"
            onClick={() => navigate("/ProfilePage")}
          >
            <CgProfile />
            Profile
          </button>
          <div className="flex">
            <button className="flex mg-top btn-style w-full p medium-font bg-black text-red">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
