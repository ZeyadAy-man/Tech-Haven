import React from 'react';
import './UserProfile.css';
import profileIcon from '../Resources/3135768.png';
import '../App.css'


const UserProfile =({ firstname,lastname,email,phone,id,location,balance,children }) => {
  return (
    <div className="profileContainer">

      <h1 className="profileTitle">
      { firstname+lastname } Profile
      </h1>

      <div className="profileCard"> 
        <img
          src={profileIcon}
          alt="User"
          className="profileImage"
        />

        <div className="profileDetails">
          <h2>DETAILS</h2>
          <p>
            <strong>First Name:</strong> {firstname}
          </p>
          <p>
            <strong>Last Name:</strong> {lastname}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>User ID:</strong> {id}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
          <p>
            <strong>Balance:</strong> {balance}
          </p>
        </div>
        
      </div>

      {children}

    </div>
  );
}

export default UserProfile;