import React, { useEffect, useState } from "react";
import { sendRequest } from "../../../core/remote/request";

const CreatePostPopup = () => {
  const [imageData, setImageData] = useState();
  const [image, setImage] = useState("");

  function handleImageUpload(e) {
    const file = e.target.files[0];
    setImageData(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  }

  return (
    <div className="popup flex">
      <div className="flex column popup-child border-radius gap p bg-grey">
        <div className="flex align-center w-full justify-between">
          <p className="bold">X</p>
          <h3>Create new post</h3>
          <button>Share</button>
        </div>
        <div className="flex ">
          <div className="flex column center gap popup-img">
            <h3>Select image to upload</h3>
            <img
            //   src={
            //     image == ""
            //       ? user &&
            //         "http://127.0.0.1:8000/image/" + image
            //       : image
            //   }
            />
            <input
              type="file"
              label="profile_picture"
              accept="image/*"
              className="bg-grey text-white"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
          <div className="popup-info">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostPopup;
