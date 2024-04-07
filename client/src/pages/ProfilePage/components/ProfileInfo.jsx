import React from "react";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const ProfileInfo = () => {
  return (
    <div className="flex column align-center w-full profile-info-container">
      <div>
        <div className="profile-info-img">
          <img src="" alt="" />
        </div>
        <div className="profile-info-desc">
          <div>
            <h3 className="">kanj_a1 <FaBeer /></h3>
            <button>Edit Profile</button>
            <button>View Archive</button>
            <i></i>
          </div>
          <div>
            <h4>0 Posts</h4>
            <h4>77 followers</h4>
            <h4>177 following</h4>
          </div>
          <h4>Abbas Kanj</h4>
          <h4>
            biograpgy: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias ducimus voluptates quisquam explicabo excepturi libero,
            deleniti nihil nobis voluptas perferendis sapiente adipisci esse
            fuga asperiores quo architecto error tenetur corporis.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
