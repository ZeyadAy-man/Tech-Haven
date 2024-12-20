import React from 'react';
import './AdminProfile.css'
import profileIcon from '../Resources/3135768.png'



function AdminProfile({ id,firstname,lastname,phone, children}) {
  return (
    <div className="profileContainer">

      <h1 className="profileTitle">
        <p>{ firstname+lastname } Admin Profile</p> 
      </h1>

      <div className="profileCard">
        <img
          src={profileIcon}
          alt="Admin"
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
            <strong>Phone:</strong> {phone}
          </p>
        
        </div>
        
      </div>
      {children}
    </div>
  );
}

export default AdminProfile;