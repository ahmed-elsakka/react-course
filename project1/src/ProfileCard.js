// src/ProfileCard.js
import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, bio, imageUrl }) {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={`${name}'s profile`} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}

export default ProfileCard;
