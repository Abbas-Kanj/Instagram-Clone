import React from "react";
import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const {
    id = null,
    username = "",
    fullName = "",
    postCount = 0,
    followersCount = 0,
    followingCount = 0,
    biography = "",
    profilePicture = "",
  } = user || {};
  console.log("this is the user list");
  console.log(user);

  return (
    <div className="flex column align-center w-full">
      <div className="flex row center profile-info-container big-gap text-white">
        <div className="profile-info-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt=""
          />
        </div>
        <div className="profile-info-desc">
          <div className="flex center gap">
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
          <div className="flex center gap mg-top">
            <h4>{postCount} Posts</h4>
            <h4>{followersCount} followers</h4>
            <h4>{followingCount} following</h4>
          </div>
          <div className="flex column mg-top small-gap">
            <h4>{fullName}</h4>
            <p>{biography}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
