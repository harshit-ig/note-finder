import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import HomePage from './components/HomePage';
import UploadNotesPage from './components/UploadNotesPage';
import MyNotesPage from './components/MyNotesPage';
import SubjectsPage from './components/SubjectsPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <div className="container">
            <Link to="/" className="logo">LOGO</Link>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/upload">Upload Notes</Link></li>
                <li><Link to="/my-notes">My Notes</Link></li>
                <li><Link to="/subjects">Subjects</Link></li>
              </ul>
            </nav>
            <Link to="/profile" className="profile-link">
             <AiOutlineUser/>
              <span>Profile</span>
            </Link>
          </div>
        </header>

        <main>
          <Routes>
            <Route exact path="/" component={<HomePage/>} />
            <Route path="/upload" component={<UploadNotesPage/>} />
            <Route path="/my-notes" component={<MyNotesPage/>} />
            <Route path="/subjects" component={<SubjectsPage/>} />
            <Route path="/profile" component={<ProfilePage/>} />
          </Routes>
        </main>

        <footer>
          <div className="container">
            <p>&copy; 2023 Notes Finder. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;