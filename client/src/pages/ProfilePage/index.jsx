import React from "react";
import Sidebar from "../../common/components/Sidebar";
import ProfileInfo from "./components/ProfileInfo";
import "./index.css";

const ProfilePage = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <ProfileInfo></ProfileInfo>
    </div>
  );
};

export default ProfilePage;
