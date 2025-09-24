// src/components/ProfileCard.jsx
import React from "react";


const ProfileCard = ({ name, role, bio, image }) => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img src={image} alt={name} className="profile-img" />
      </div>
      <div className="profile-content">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
        <p className="profile-bio">{bio}</p>
        <button className="profile-btn">View More</button>
      </div>
    </div>
  );
};

export default ProfileCard;
