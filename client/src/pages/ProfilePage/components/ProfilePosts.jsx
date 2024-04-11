import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sendRequest } from "../../../core/remote/request";
import { setUserPosts } from "../../../features/users/userSlice";

const ProfilePosts = () => {
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.user.posts);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const getUserPosts = async () => {
    if (token) {
      try {
        const res = await sendRequest("GET", `/api/getUserPosts/${user.id}`);
        if ((res.status = 200)) {
          dispatch(setUserPosts(res.data));
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    getUserPosts();
  }, [user]);

  return (
    <div className="flex center wrap medium-gap single-post">
      {posts.map((p, i) => (
        <img
          key={i}
          src={"http://127.0.0.1:8000/post_images/" + p.image}
          alt=""
        />
      ))}
    </div>
  );
};

export default ProfilePosts;
