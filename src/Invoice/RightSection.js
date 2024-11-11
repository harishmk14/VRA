// RightSection.js
import React, { useState, useEffect, useRef } from 'react';
import Invoicea4 from './Invoicea4';

const RightSection = () => {

  const [isShareDrawerOpen, setShareDrawerOpen] = useState(false);
  const [isDownloadDrawerOpen, setDownloadDrawerOpen] = useState(false);
  const shareButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const shareDrawerRef = useRef(null);
  const downloadDrawerRef = useRef(null);

  const toggleShareDrawer = () => {
    setShareDrawerOpen(!isShareDrawerOpen);
    setDownloadDrawerOpen(false);
  };

  const toggleDownloadDrawer = () => {
    setDownloadDrawerOpen(!isDownloadDrawerOpen);
    setShareDrawerOpen(false);
  };

  const handleClickOutside = (e) => {
    if (
      shareDrawerRef.current && !shareDrawerRef.current.contains(e.target) &&
      shareButtonRef.current && !shareButtonRef.current.contains(e.target)
    ) {
      setShareDrawerOpen(false);
    }

    if (
      downloadDrawerRef.current && !downloadDrawerRef.current.contains(e.target) &&
      downloadButtonRef.current && !downloadButtonRef.current.contains(e.target)
    ) {
      setDownloadDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-[33.6rem] bg-white rounded-md shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
        {/* Heading */}
        <h2 className="text-black font-bold text-lg ml-2">INV-008614</h2>

        <div className="relative flex space-x-3">
          {/* Share Button */}
          <button
            ref={shareButtonRef}
            className="hover:bg-blue-400 bg-blue-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={toggleShareDrawer}
          >
            <i className="bi bi-share-fill"></i>
          </button>

          {/* Share Drawer (Mail and WhatsApp Buttons) */}
          <div
            ref={shareDrawerRef}
            className={`absolute top-full left-1.5 mt-2 transform -translate-x-1/2 flex flex-col bg-gray-200 p-2 rounded-full space-y-3 transition-all duration-300 ease-in-out ${isShareDrawerOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
              }`}
          >
            <button
              className="hover:bg-gray-400 bg-gray-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={() => alert('Mail clicked')}
            >
              <i className="bi bi-envelope-fill"></i>
            </button>

            <button
              className="hover:bg-green-400 bg-green-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={() => alert('WhatsApp clicked')}
            >
              <i className="bi bi-whatsapp"></i>
            </button>
          </div>

          {/* Download Button */}
          <button
            ref={downloadButtonRef}
            className="hover:bg-green-400 bg-green-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={toggleDownloadDrawer}
          >
            <i className="bi bi-download"></i>
          </button>

          {/* Download Drawer (JPG and PDF Options) */}
          <div
            ref={downloadDrawerRef}
            className={`absolute top-full left-[40%] mt-2 transform -translate-x-1/2 flex flex-col bg-gray-200 p-2 rounded-full space-y-3 transition-all duration-300 ease-in-out ${isDownloadDrawerOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
              }`}
          >
            <button
              className="hover:bg-gray-400 bg-gray-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={() => alert('Download JPG clicked')}
            >
              JPG
            </button>

            <button
              className="hover:bg-gray-400 bg-gray-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={() => alert('Download PDF clicked')}
            >
              PDF
            </button>
          </div>

          {/* Print Button */}
          <button
            className="hover:bg-red-400 bg-red-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={() => alert('Print clicked')}
          >
            <i className="bi bi-printer-fill"></i>
          </button>
        </div>
      </div>
      <div className='overflow-y-auto py-6'>
      <Invoicea4 />
      </div>
    </div>
  );
};

export default RightSection;
