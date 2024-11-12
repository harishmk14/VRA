import React from 'react';

const ReviewModal = ({ isOpen, onClose, driver }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-20">
      <div className="bg-white py-5 rounded-lg shadow-lg w-full h-auto md:w-2/3 lg:w-1/2 lg:h-96 relative mx-4">
        <button 
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times; 
        </button>
        <h2 className="text-lg font-semibold mb-4 ml-5">Reviews for {driver?.name}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-h-72 lg:max-h-72 overflow-y-auto gap-4 px-5">
          {driver?.reviews?.length ? (
            driver.reviews.map((review, index) => (
              <div key={index} className="p-2 border border-gray-300 rounded">
                <div className="flex justify-between">
                  <span className="font-semibold">{review.user}</span>
                  <span className="text-yellow-500">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No reviews available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
