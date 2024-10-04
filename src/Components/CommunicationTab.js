// CommunicationTab.js
import React from 'react';
import '../styles/CommunicationTab.css'; // Import the CSS file for styles

const CommunicationTab = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>} {/* Overlay for shadow effect */}
      <div className={`communication-tab ${isOpen ? 'open' : ''}`}>
        <div className="communication-tab-content">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-600">Communication Tab</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <i className="bi bi-arrow-right-short text-2xl"></i> {/* New icon */}
            </button>
          </div>
          {/* Content goes here */}
          <div className="flex flex-col space-y-4">
            <p>Welcome to the communication tab!</p>
            {/* Add your chat messages or components here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunicationTab;
