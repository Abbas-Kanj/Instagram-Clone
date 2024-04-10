import React from "react";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProfilePosts from "./ProfilePosts";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.user.posts);
  const user = useSelector((state) => state.user.user);
  const {
    id = null,
    username = "",
    fullname = "",
    postCount = 0,
    followersCount = 0,
    followingCount = 0,
    biography = "",
    profile_picture = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
  } = user || {};

  return (
    <div className="flex column align-center w-full">
      <div className="flex row align-center profile-info-container text-white">
        <div className="flex center profile-info-img">
          <img
            src={"http://127.0.0.1:8000/profile_pictures/" + profile_picture}
            alt=""
          />
        </div>
        <div className="profile-info-desc">
          <div className="flex align-center gap">
            <h3 className="">{username}</h3>
            <button
              className="btn-style text-white bg-grey bold"
              onClick={() => navigate(`./EditProfile`)}
            >
              Edit Profile
            </button>
            <button className="btn-style text-white bg-grey bold">
              View Archive
            </button>
            <IoIosSettings />
          </div>
          <div className="flex  gap mg-top">
            <h4>{posts.length} posts</h4>
            <h4>{followersCount} followers</h4>
            <h4>{followingCount} following</h4>
          </div>
          <div className="flex column mg-top small-gap">
            <h4>{fullname}</h4>
            <p>{biography}</p>
          </div>
        </div>
      </div>

      <div className="p profile-posts-container">
        <ProfilePosts></ProfilePosts>
      </div>
    </div>
  );
};

export default ProfileInfo;
