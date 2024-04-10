import React, { useState } from "react";
import "../styles/sidebar.css";
import { sendRequest } from "../../core/remote/request";
import { useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsPlusSquare } from "react-icons/bs";
import CreatePostPopup from "../../pages/Home/components/CreatePostPopup";

const Sidebar = () => {
  const navigate = useNavigate();
  const [openCreatePostPopup, setOpenCreatePostPopup] = useState(false);
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      {openCreatePostPopup && (
        <CreatePostPopup
          setOpenCreatePostPopup={setOpenCreatePostPopup}
        ></CreatePostPopup>
      )}
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
              onClick={() => {
                setOpenCreatePostPopup(true);
              }}
            >
              <BsPlusSquare />
              Create
            </button>
            <button
              className="flex  btn-style w-full p medium-font bg-black text-primary"
              onClick={() => navigate("/ProfilePage")}
            >
              <CgProfile />
              Profile
            </button>
            <div className="flex">
              <button
                className="flex mg-top btn-style w-full p medium-font bg-black text-red"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
