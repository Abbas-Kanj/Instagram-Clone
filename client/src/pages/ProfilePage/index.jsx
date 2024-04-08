import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../common/components/Sidebar";
import ProfileInfo from "./components/ProfileInfo";
import "./index.css";

const ProfilePage = () => {
  const users = useSelector((state) => state.users);
  // console.log(users);
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <ProfileInfo users={users}></ProfileInfo>
    </div>
  );
};

export default ProfilePage;
