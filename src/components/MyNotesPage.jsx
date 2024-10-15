import React from 'react';
import { AiOutlineDownload , AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './MyNotesPage.css';

export default function MyNotesPage() {
  const myNotes = [
    { id: 1, title: 'Calculus Fundamentals', subject: 'Mathematics', date: '2023-05-15' },
    { id: 2, title: 'Introduction to React', subject: 'Computer Science', date: '2023-06-02' },
    { id: 3, title: 'World War II Overview', subject: 'History', date: '2023-06-10' },
  ];

  return (
    <div className="my-notes-container">
      <h1>My Notes</h1>
      <div className="notes-table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myNotes.map((note) => (
              <tr key={note.id}>
                <td>{note.title}</td>
                <td>{note.subject}</td>
                <td>{note.date}</td>
                <td>
                  <Link to={`/notes/${note.id}`} className="action-link download">
                    <AiOutlineDownload/>
                  </Link>
                  <button className="action-link delete">
                   <AiFillDelete/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}