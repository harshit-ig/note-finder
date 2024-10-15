import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to Notes Finder</h1>
        <p>Find and share study notes with ease!</p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search Notes"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch/>
          </button>
        </form>
      </section>

      <section className="trending-section">
        <h2>Trending Notes</h2>
        <ul>
          {['Mathematics', 'Physics', 'Computer Science', 'Literature', 'History'].map((subject, index) => (
            <li key={index}>
              <Link to={`/subjects/${subject.toLowerCase().replace(' ', '-')}`}>
                {subject} Notes
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}