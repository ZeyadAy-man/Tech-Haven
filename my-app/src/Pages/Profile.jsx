import React from 'react';
import './Profile.css'
import profileIcon from '../Resources/3135768.png'
import { Link } from 'react-router-dom';


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
      <Link to='/editAdminProfile' style={{marginTop: '30px'}}><input type='button' className='button' value={'Edit Profile'}></input></Link>
      {children}
    </div>
  );
}

export default AdminProfile;