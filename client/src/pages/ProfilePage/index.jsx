import React from "react";
import Sidebar from "../../common/components/Sidebar";
import "./index.css";

const ProfilePage = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default ProfilePage;
