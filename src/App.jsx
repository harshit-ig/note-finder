import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import UploadNotesPage from './components/UploadNotesPage';
import MyNotesPage from './components/MyNotesPage';
import SubjectsPage from './components/SubjectsPage';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
      

        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadNotesPage />} />
            <Route path="/my-notes" element={<MyNotesPage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 Notes Finder. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
