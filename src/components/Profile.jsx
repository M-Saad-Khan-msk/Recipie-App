// src/components/Profile.jsx
import React from "react";
import ProfileData from "./ProfileData";
import ProfileCard from "./ProfileCard";

const Profile = () => {
  return (
    <section id="profiles" className="profile-section">
      <div className="profile-container">
        <h2 className="profile-heading">Meet Our Expert Chefs 👨‍🍳</h2>
        <p className="profile-intro">
          Our talented chefs, bakers, and food enthusiasts bring passion, 
          creativity, and tradition to every recipe they create.
        </p>
        <div className="profile-grid">
          {ProfileData.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              role={profile.role}
              bio={profile.bio}
              image={profile.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profile;
