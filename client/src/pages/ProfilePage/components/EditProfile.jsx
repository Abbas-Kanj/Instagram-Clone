import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../features/users/userSlice";

const EditProfile = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [biography, setBiography] = useState("");
  const [profilePictureData, setProfilePictureData] = useState();
  const [profilePicture, setProfilePicture] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const validateForm = () => {
    if (fullname == "" || biography == "" || profilePictureData == "") {
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
      data.append("fullname", fullname);
      data.append("biography", biography);
      data.append("profile_picture", profilePictureData);
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const res = await sendRequest(
          "POST",
          `/api/updateUser/${user.id}`,
          data,
          headers
        );
        if ((res.status = 200)) {
          console.log("update successfull");
          dispatch(
            updateUser({
              fullname: fullname,
              biography: biography,
              profile_picture: res.data.profile_picture,
            })
          );
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
            label="fullname"
            placeholder={
              user.fullname == null ? "Enter your fullname" : user.fullname
            }
            className="bg-grey text-white"
            onChange={(e) => setFullname(e.target.value)}
          />
          <div>
            <img
              src={
                profilePicture == ""
                  ? user &&
                    "http://127.0.0.1:8000/profile_pictures/" +
                      user.profile_picture
                  : profilePicture
              }
              alt=""
            />
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
            placeholder={
              user.biography == null ? "Enter your bio" : user.biography
            }
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
          {error && <small className="text-red">{error}</small>}
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
