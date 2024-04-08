import React from "react";
import { IoIosSettings } from "react-icons/io";


const ProfileInfo = () => {
  return (
    <div className="flex column align-center w-full">
      <div className="flex row center profile-info-container big-gap text-white">
        <div className="profile-info-img">
            <img src="https://i.pinimg.com/736x/94/fe/5a/94fe5a2a3b83171fbb2494d6100159e9.jpg" alt="" />
        </div>
        <div className="profile-info-desc">
          <div className="flex center gap">
            <h3 className="">
              kanj_a1 
            </h3>
            <button className="btn-style text-white bg-grey bold">Edit Profile</button>
            <button className="btn-style text-white bg-grey bold">View Archive</button>
            <IoIosSettings />
          </div>
          <div className="flex center gap mg-top">
            <h4>0 Posts</h4>
            <h4>77 followers</h4>
            <h4>177 following</h4>
          </div>
          <div className="flex column mg-top small-gap">
            <h4>Abbas Kanj</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias ducimus voluptates quisquam explicabo excepturi
                libero.
              </p>
          </div>
            
          
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
