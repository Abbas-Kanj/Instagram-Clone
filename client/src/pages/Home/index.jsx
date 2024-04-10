import React from "react";
import Sidebar from "../../common/components/Sidebar";
import Feed from "./components/Feed";
import Recommendations from "./components/Recommendations";
import "./index.css";
import CreatePostPopup from "./components/CreatePostPopup";

const Home = () => {
  return (
    <div className="flex w-full position-relative">
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Recommendations></Recommendations>
    </div>
  );
};

export default Home;
