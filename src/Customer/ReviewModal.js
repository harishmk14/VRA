import React, { useState } from 'react';
import FilterPopup from './FilterPopup'; // Import the new FilterPopup component

const ReviewModal = ({ reviews, onClose }) => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [filteredReviews, setFilteredReviews] = useState(reviews); // State to hold filtered reviews
  const [openTripIndex, setOpenTripIndex] = useState(null); // State to handle opening and closing trip details

  const handleFilterApply = ({ date, starRating }) => {
    const filtered = reviews.filter((review) => {
      const matchesDate = date ? review.date === date : true;
      const matchesRating = starRating ? review.rating === Number(starRating) : true;
      return matchesDate && matchesRating;
    });
    setFilteredReviews(filtered); // Update the filtered reviews
  };

  const toggleTripDetails = (index) => {
    setOpenTripIndex(openTripIndex === index ? null : index); // Toggle the trip details drawer
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white p-5 rounded-md shadow-lg w-[40rem] max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <div className='flex'>
            <h2 className="text-xl font-semibold">Reviews</h2>
            <button 
              className="text-blue-500 text-sm ml-5 mt-1 font-semibold"
              onClick={() => setIsFilterPopupOpen(true)} // Open the filter popup
            >
              Filter
            </button>
          </div>
          <div>
            <i className="bi bi-x-lg text-lg cursor-pointer ml-4" onClick={onClose}></i>
          </div>
        </div>

        {filteredReviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm mb-3">
            <div className="flex items-start">
              <img
                src={review.profilePic}
                alt={`${review.name}'s profile`}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{review.name}</h3>
                  <p className="mt-1 text-gray-500 text-sm">{review.date}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill text-yellow-400"></i>
                  ))}
                </div>
                <div className="flex items-center mt-1 gap-3">
                  <p className="text-gray-500">{review.tripAreaDetails}</p>
                  <i
                    className={`bi bi-chevron-${openTripIndex === index ? 'up' : 'down'} text-blue-500 text-lg cursor-pointer`}
                    onClick={() => toggleTripDetails(index)} // Toggle the trip details
                  ></i>
                </div>

                {openTripIndex === index && (
                  <div className="mt-3 bg-gray-100 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">Trip Details:</p>
                    {review.tripDetails.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-500">
                        <strong>{detail.label}:</strong> {detail.value}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="mt-2 text-gray-600">{review.content}</p>
          </div>
        ))}

        {isFilterPopupOpen && (
          <FilterPopup 
            onApply={handleFilterApply} 
            onClose={() => setIsFilterPopupOpen(false)} 
          />
        )}
      </div>
    </div>
  );
};

export default ReviewModal;
