import React from 'react'
import UserEditProfile from "../Components/UserEditProfile";
import ImageCard from "../Components/ImageCard";
import "./EditProfile.css";

function EditProfile() {
    return (
        <div className="appContainer">
            <div className="imageSection">
                <ImageCard />
            </div>
            <div className="userEditSection">
                <UserEditProfile />
            </div>
        </div>
    )
}

export default EditProfile