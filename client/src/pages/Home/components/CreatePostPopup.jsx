import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../core/remote/request";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUserPosts } from "../../../features/users/userSlice";

const CreatePostPopup = ({ setOpenCreatePostPopup }) => {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.user.user);
  const posts = useSelector((state) => state.user.posts);
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [imageData, setImageData] = useState();
  const [image, setImage] = useState(
    "https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
  );

  const validatePostForm = () => {
    if (caption == "" || hashtags == "" || imageData == "") {
      setError("Please fill empty fields");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setImageData(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }

  const createPost = async (e) => {
    e.preventDefault();
    if (token) {
      if (validatePostForm()) {
        let data = new FormData();
        data.append("caption", caption);
        data.append("hashtags", hashtags);
        data.append("image", imageData);
        try {
          const res = await sendRequest(
            "POST",
            `/api/createPost/${user.id}`,
            data
          );
          if ((res.status = 200)) {
            setOpenCreatePostPopup(false);
            dispatch(addUserPosts(res.data));
          }
        } catch (error) {
          console.log(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="popup flex">
      <form className="flex column border border-radius gap bg-grey popup-child">
        <div className="flex align-center w-full justify-between popup-child-nav">
          <p
            className="text-red bold cursor-pointer"
            onClick={() => setOpenCreatePostPopup(false)}
          >
            X
          </p>
          <h3>Create new post</h3>
          <button className="text-blue small-font" onClick={createPost}>
            Share
          </button>
        </div>
        <div className="flex popup-child-container">
          <div className="flex column center small-p gap popup-img">
            <img src={image} />
            <input
              id="image-upload"
              type="file"
              label="image"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageUpload(e)}
            />
            <label
              htmlFor="image-upload"
              className="bg-blue text-white border small-font cursor-pointer bold"
            >
              Select image to upload
            </label>
          </div>
          <div className="flex column p justify-around popup-info">
            <div className="flex align-center gap">
              <img
                src={
                  "http://127.0.0.1:8000/profile_pictures/" +
                  user.profile_picture
                }
                alt=""
              />
              <h5>kanj_a1</h5>
            </div>
            <textarea
              name=""
              label="caption"
              placeholder="Enter Captions..."
              id=""
              cols="30"
              rows="10"
              className="bg-grey text-white"
              onChange={(e) => setCaption(e.target.value)}
            ></textarea>

            <input
              type="text"
              label="hashtags"
              placeholder="Enter hashtags"
              className="bg-grey text-white"
              onChange={(e) => setHashtags(e.target.value)}
            />
            {error && <small className="text-red">{error}</small>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPopup;
