// RightSection.js
import React, { useState, useEffect, useRef } from 'react';
import Invoicea4 from './Invoicea4';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const RightSection = () => {

  const [isShareDrawerOpen, setShareDrawerOpen] = useState(false);
  const [isDownloadDrawerOpen, setDownloadDrawerOpen] = useState(false);
  const shareButtonRef = useRef(null);
  const downloadButtonRef = useRef(null);
  const shareDrawerRef = useRef(null);
  const downloadDrawerRef = useRef(null);
  const invoiceRef = useRef(null);
  const [zoom, setZoom] = useState(1);

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

  const handleZoomIn = () => setZoom(prevZoom => Math.min(prevZoom + 0.1, 2));
  const handleZoomOut = () => setZoom(prevZoom => Math.max(prevZoom - 0.1, 0.5));

  const handleDownloadJPG = () => {
    if (invoiceRef.current) {
      html2canvas(invoiceRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'invoice.jpg';
        link.click();
      });
    }
  };

  const handleDownloadPDF = async () => {
    if (invoiceRef.current) {
      const canvas = await html2canvas(invoiceRef.current, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]); // Fit to content size
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('invoice.pdf');
    }
  };

  return (
    <div className="flex flex-col h-[33.5rem] overflow-y-auto">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-100">
        <h2 className="text-black font-bold text-lg ml-2">INV-008614</h2>
        <div className="relative flex space-x-3">
          <button
            ref={shareButtonRef}
            className="hover:bg-blue-400 bg-blue-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={toggleShareDrawer}
          >
            <i className="bi bi-share-fill"></i>
          </button>
          <div
            ref={shareDrawerRef}
            className={`absolute top-full left-1.5 mt-2 transform -translate-x-1/2 flex flex-col bg-gray-200 p-2 rounded-full space-y-3 transition-all duration-300 ease-in-out ${isShareDrawerOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
              }`}
            style={{ zIndex: 50 }}
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
          <button
            ref={downloadButtonRef}
            className="hover:bg-green-400 bg-green-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={toggleDownloadDrawer}
          >
            <i className="bi bi-download"></i>
          </button>
          <div
            ref={downloadDrawerRef}
            className={`absolute top-full left-[40%] mt-2 transform -translate-x-1/2 flex flex-col bg-gray-200 p-2 rounded-full space-y-3 transition-all duration-300 ease-in-out ${isDownloadDrawerOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
              }`}
            style={{ zIndex: 50 }}
          >
            <button
              className="hover:bg-gray-400 bg-gray-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={handleDownloadJPG}
            >
              JPG
            </button>

            <button
              className="hover:bg-gray-400 bg-gray-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
              onClick={handleDownloadPDF}
            >
              PDF
            </button>
          </div>
          <button
            className="hover:bg-red-400 bg-red-500 px-2.5 py-1.5 rounded-full text-white flex items-center"
            onClick={() => alert('Print clicked')}
          >
            <i className="bi bi-printer-fill"></i>
          </button>
        </div>
      </div>
      <div className="relative overflow-y-auto py-6">
        <div ref={invoiceRef} style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}>
          <Invoicea4 />
        </div>
        <div className="fixed bottom-8 right-8 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="px-2 py-1 text-white rounded-full bg-gray-400"
          >
            <i className="bi bi-zoom-in"></i>
          </button>
          <button
            onClick={handleZoomOut}
            className="px-2 py-1 text-white rounded-full bg-gray-400"
          >
            <i className="bi bi-zoom-out"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
