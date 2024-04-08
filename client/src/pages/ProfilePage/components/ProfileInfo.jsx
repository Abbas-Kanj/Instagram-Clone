import React from "react";
import { IoIosSettings } from "react-icons/io";

const ProfileInfo = ({ users }) => {
  const {
    username,
    fullName,
    postCount,
    followersCount,
    followingCount,
    bio,
    profilePicture,
  } = users;

  return (
    <div className="flex column align-center w-full">
      <div className="flex row center profile-info-container big-gap text-white">
        <div className="profile-info-img">
          <img
            src="https://i.pinimg.com/736x/94/fe/5a/94fe5a2a3b83171fbb2494d6100159e9.jpg"
            alt=""
          />
        </div>
        <div className="profile-info-desc">
          <div className="flex center gap">
            <h3 className="">{username}</h3>
            <button className="btn-style text-white bg-grey bold">
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
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
