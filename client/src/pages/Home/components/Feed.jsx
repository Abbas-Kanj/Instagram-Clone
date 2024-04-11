import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../../features/posts/postsSlice";

const Feed = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const userPosts = useSelector((state) => state.user.posts);
  const posts = useSelector((state) => state.posts.posts);
  const getPosts = async () => {
    if (token) {
      try {
        const res = await sendRequest("GET", "/api/getAllPosts");
        if ((res.status = 200)) {
          dispatch(setPosts(res.data));
        }
      } catch (error) {
        console.log(error.res.data.message);
      }
    }
  };

  useEffect(() => {
    getPosts();
  }, [userPosts]);

  return (
    <div className="flex column align-center feed">
      <div className="flex center gap feed-stories">
        <div className="flex column center">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt=""
          />
          <small>yusif</small>
        </div>
      </div>
      <div className="flex column align-center p gap posts">
        {posts.map((post, i) => (
          <div key={i} className="p gap post-container">
            <div className="post-owner">
              <img src="" alt="" />
              <h3>{post.user.username}</h3>
            </div>
            <div className="post-image">
              <img
                src={"http://127.0.0.1:8000/post_images/" + post.image}
                alt=""
              />
            </div>
            <div className="post-likes"></div>
            <div className="post-info">
              <h4>15,326 likes</h4>
              <div className="flex column small-gap w-full">
                <h4>{post.user.username}</h4>
                <span>{post.caption}</span>
                <span className="bold">{post.hashtags}</span>
              </div>
              <p className=" cursor-pointer">View all comments</p>
              <p className=" cursor-pointer">Add a comment</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
