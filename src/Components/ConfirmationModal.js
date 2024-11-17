// components/ConfirmationModal.js
import React from 'react';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
      <div className="group select-none w-[25rem] flex flex-col p-4 relative items-center justify-center bg-white border border-gray-400 shadow-lg rounded-2xl">
        <div>
          <div className="text-center p-3 flex-auto justify-center">
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              className="group-hover:animate-bounce w-12 h-12 flex items-center text-gray-600 fill-blue-500 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                fillRule="evenodd"
              />
            </svg>
            <h2 className="text-xl font-bold py-4 text-gray-600">{message}</h2>
          </div>
          <div className="p-2 mt-2 text-center space-x-5 md:block">
            <button
              className="mb-2 md:mb-0 bg-gray-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-500 hover:border-gray-400 text-white rounded-full hover:shadow-lg hover:bg-gray-400 transition ease-in duration-300"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 hover:border-blue-500 text-white hover:text-blue-500 rounded-full transition ease-in duration-300"
              onClick={onConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
