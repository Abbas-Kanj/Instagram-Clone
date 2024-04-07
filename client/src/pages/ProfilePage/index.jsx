import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../../common/components/Sidebar";
import ProfileInfo from "./components/ProfileInfo";

const ProfilePage = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <ProfileInfo></ProfileInfo>
    </div>
  );
};

export default ProfilePage;
