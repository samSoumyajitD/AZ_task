
import './App.css';
import Navigation from './components/navigation/Navbar'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/Dashboard";
import Learn from "./components/pages/Learn";
import Forums from "./components/pages/Forums";
import Upskill from "./components/pages/Upskill";
import Contest from "./components/pages/Contest";
import Leaderboard from "./components/pages/Leaderboard";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/upskill" element={<Upskill />} />
            <Route path="/contest" element={<Contest />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

