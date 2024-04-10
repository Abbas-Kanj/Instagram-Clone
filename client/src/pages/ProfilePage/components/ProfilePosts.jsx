import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../../core/remote/request";
import { setUserPosts } from "../../../features/users/userSlice";

const ProfilePosts = () => {
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const getUserPosts = async () => {
    if (token) {
      try {
        const res = await sendRequest("GET", `/api/getUserPosts/${user.id}`);
        if ((res.status = 200)) {
          console.log(res.data);
          dispatch(setUserPosts(res.data));
        }
      } catch (error) {
        console.log(error.res.data.message);
      }
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  return <div></div>;
};

export default ProfilePosts;
