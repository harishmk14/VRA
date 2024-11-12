// LeftSection.js
import React from 'react';

const LeftSection = ({ data }) => {
  return (
    <div className="flex flex-col h-[32rem] overflow-y-auto">
      <div className='flex justify-between items-center px-4 py-3 border-b border-gray-100'>
        <h2 className="text-blue-500 font-bold text-lg">Invoice</h2>
        <button
          className="hover:bg-gray-100 bg-white px-2 py-0.5 rounded-md text-blue-500"
          onClick={() => alert('Filter clicked')}
        >
          <i className="bi bi-funnel-fill"></i>
        </button>
      </div>
      <div className='overflow-y-auto'>
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${index !== data.length - 1 ? "border-b border-gray-100" : ""
              } hover:bg-gray-100 transition-colors duration-150`}
          >
            {/* Top Row */}
            <div className="flex justify-between items-center px-4 py-3">
              <span className="font-semibold text-base">{item.name}</span>
              <button
                className="text-sm text-white hover:bg-blue-400 bg-blue-500 px-2 py-0.5 rounded-md"
                onClick={() => alert(`Viewing details for ${item.name}`)}
              >
                {item.details}
              </button>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center text-sm text-gray-700 px-4 pb-3">
              <span>
                {item.invoice} | {item.date}
              </span>
              <span
                className={`${item.status === "Pending"
                  ? "text-yellow-600"
                  : "text-green-600"
                  }`}
              >
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
