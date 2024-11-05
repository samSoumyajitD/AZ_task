
import React, { useState } from 'react';
import './Upskill.css';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Sidebarsub from './subSidebar';
import Modal from './Modal';

const UpskillSection = () => {
  const [activeSection, setActiveSection] = useState('MentorSessions');
  const [showInfo, setShowInfo] = useState(false);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const toggleInfoBox = () => {
    setShowInfo((prev) => !prev);
  };

  return (
    <div className="upskill-section">
      <div className="buttons-row">
        <div className="left-buttons-cont">
          <div className="left-buttons">
            <button
              onClick={() => handleSectionClick('MentorSessions')}
              className={`mentor-button ${activeSection === 'MentorSessions' ? 'active-button' : ''}`}
            >
              <CalendarTodayOutlinedIcon /> Mentor Sessions
            </button>
            <button
              onClick={() => handleSectionClick('LearningMaterial')}
              className={`learning-button ${activeSection === 'LearningMaterial' ? 'active-button' : ''}`}
            >
              <BusinessCenterOutlinedIcon /> Learning Material
            </button>
          </div>
        </div>

        <div className="right-button">
          <button className="right-button1" onClick={toggleInfoBox}>
            <InfoOutlinedIcon className="info-icon" /> How it works
          </button>
        </div>
      </div>

      {activeSection === 'MentorSessions' && (
        <div className="mentor-sessions">
          <p>This is the Mentor Sessions section content.</p>
        </div>
      )}
      {activeSection === 'LearningMaterial' && (
        <div className="learning-material">
          <Sidebarsub />
        </div>
      )}

      {/* --------Toggleable Modal for "How it works" */}
      <Modal show={showInfo} onClose={toggleInfoBox}>
        <p>This is information on how it works.</p>
      </Modal>
    </div>
  );
};

export default UpskillSection;
