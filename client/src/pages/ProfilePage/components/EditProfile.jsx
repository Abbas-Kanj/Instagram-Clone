import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../features/users/usersSlice";
import { useDispatch } from "react-redux";

const LoginForm = ({ setLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [biography, setBiography] = useState("");
  const [profilePictureData, setProfilePictureData] = useState();
  const [profilePicture, setProfilePicture] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  );
  const [error, setError] = useState("");
  const dispactch = useDispatch();

  const validateForm = () => {
    if (
      username == "" ||
      fullname == "" ||
      biography == "" ||
      profilePictureData == ""
    ) {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setProfilePictureData(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
  }

  const handleUpdate = async () => {
    if (validateForm()) {
      let data = new FormData();
      data.append("username", username);
      data.append("fullname", fullname);
      data.append("biography", biography);
      data.append("profile_picture", profilePictureData);
      try {
        const headers = {
          "Content-Type": "multipart/form-data",
        };
        const res = await sendRequest("POST", "/api/login", data, headers);
        console.log(res.data.user);
        if ((res.status = 200)) {
          window.localStorage.setItem("token", res.data.authorisation.token);
          dispactch(setUser(res.data.user));
          console.log("sign in successfull");
          navigate("/ProfilePage");
        }
      } catch (error) {
        console.log(error);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex column align-center w-full">
      <div className="flex column align-center formEdit ">
        <h1 className="text-primary">Edit Profile</h1>
        <form className="flex column big-gap p formEdit-container align-center">
          <input
            type="text"
            label="username"
            placeholder="Username"
            className="bg-grey text-white"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            label="fullname"
            placeholder="Full name"
            className="bg-grey text-white"
            onChange={(e) => setFullname(e.target.value)}
          />
          <div>
            <img src={profilePicture} alt="" />
            <input
              type="file"
              label="profile_picture"
              accept="image/*"
              placeholder="Profile Picture"
              className="bg-grey text-white"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>

          <input
            type="text"
            label="biography"
            placeholder="Biography"
            className="bg-grey text-white"
            onChange={(e) => setBiography(e.target.value)}
          />

          <button
            className="btn-style bg-blue text-white bold"
            onClick={handleUpdate}
            type="button"
          >
            Update
          </button>
          {/* {error && <small className="text-red">{error}</small>} */}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
