import React from "react";
import photo from "../Resources/sec09_02.jpg";
import "./ImageCard.css";

function ImageCard() {
  return (
    <div className="imageCard card">
      <div>
        <img
          src={photo}
          alt="Profile"
          className="profilePic"
        />
      </div>
      <div>
        <h3>Select profile photo</h3>
        <input type="file" accept="image/png, image/jpg, image/gif" />
        <p>JPG, GIF or PNG. Max size of 800K</p>
        <button className="saveButton">Save</button>
      </div>
    </div>
  );
}

export default ImageCard;
