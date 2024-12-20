import React from "react";
import "./UserEditProfile.css";

function UserEditProfile() {

  return (
    <div className="card">
      <h3>General Information</h3>
      <div className="formRow">
        <div className="cell">
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className="cell">
          <label>Last Name</label>
          <input type="text" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="formRow">
        <div className="cell">
          <label>Email</label>
          <input type="email" placeholder="name@gmail.com" />
        </div>
        <div className="cell">
          <label>Phone</label>
          <input type="tel" placeholder="+20 1123 456 789" />
        </div>
      </div>

{/* /////////////////////////////////////////////////// */}

      <div className="formRow">
        <div className="cell">
          <label>Address</label>
          <input type="text" placeholder="Enter your address" />
        </div>
        <div className="cell">
          <label>Password</label>
          <input type="text" placeholder="Enter your password" />
        </div>
      </div>
      <button className="saveButton saveAll">Save All</button>
      {/* <span className="setError">{error}</span> */}
    </div>
  );
}

export default UserEditProfile;
