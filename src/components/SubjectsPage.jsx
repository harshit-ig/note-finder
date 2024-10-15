import React from 'react';
import { Link } from 'react-router-dom';
import './SubjectsPage.css';

export default function SubjectsPage() {
  const subjects = [
    { id: 1, name: 'Mathematics', count: 150 },
    { id: 2, name: 'Physics', count: 120 },
    { id: 3, name: 'Computer Science', count: 200 },
    { id: 4, name: 'Literature', count: 80 },
    { id: 5, name: 'History', count: 100 },
    { id: 6, name: 'Biology', count: 90 },
    { id: 7, name: 'Chemistry', count: 110 },
    { id: 8, name: 'Economics', count: 70 },
  ];

  return (
    <div className="subjects-container">
      <h1>Subjects</h1>
      <div className="subjects-grid">
        {subjects.map((subject) => (
          <Link key={subject.id} to={`/subjects/${subject.id}`} className="subject-card">
            <h2>{subject.name}</h2>
            <p>{subject.count} notes</p>
          </Link>
        ))}
      </div>
    </div>
  );
}