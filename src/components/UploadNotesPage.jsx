import React, { useState } from 'react';
import { AiOutlineUpload } from "react-icons/ai";

export default function UploadNotesPage() {
  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [title, setTitle] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the file to your server
    console.log('Uploading:', { file, subject, title });
    // Reset form
    setFile(null);
    setSubject('');
    setTitle('');
  };

  return (
    <div className="upload-container">
      <h1>Upload Notes</h1>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="file-upload">File</label>
          <input
            type="file"
            id="file-upload"
            onChange={handleFileChange}
            className="file-input"
            required
          />
          <label htmlFor="file-upload" className="file-label">
          <AiOutlineUpload/>
            {file ? file.name : 'Choose a file'}
          </label>
        </div>
        <button type="submit" className="submit-button">
          Upload Notes 
        </button>
      </form>
    </div>
  );
}