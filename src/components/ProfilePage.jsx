import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import './ProfilePage.css';

export default function ProfilePage() {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('I love sharing and learning from notes!');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically update the user's profile on the server
    console.log('Updating profile:', { name, email, bio });
  };

  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
          <AiOutlineUser/>
          </div>
          <div className="profile-info">
            <h2>{name}</h2>
            <p>{email}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
            ></textarea>
          </div>
          <button type="submit" className="update-button">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}