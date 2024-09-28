// CalendarCard.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCard = ({ date, setDate }) => {
  return (
    <div className='flex flex-col w-1/2 h-full items-center justify-center p-2'>
      <h2 className='text-lg font-bold text-gray-600'>Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        showNeighboringMonth={false}  // Ensures neighboring month days are hidden
        className='rounded-lg calendar-card'
      />
    </div>
  );
};

export default CalendarCard;
