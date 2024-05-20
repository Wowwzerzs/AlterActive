import React from 'react';
import { Calendar as ReactCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({ workoutData, onDateClick }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toISOString().split('T')[0];
      const workoutsForDate = (workoutData || []).filter(workout => workout.date === dateString);
      if (workoutsForDate.length > 0) {
        return (
          <ul>
            {workoutsForDate.map((workout, index) => (
              <li key={index} className="text-black">
                {workout.muscleGroup}
              </li>
            ))}
          </ul>
        );
      }
    }
    return null;
  };

  return (
    <div className="mx-auto bg-white p-6 rounded shadow-md text-black flex justify-center">
      <ReactCalendar
        tileContent={tileContent}
        onClickDay={onDateClick}
        className="m-auto"
      />
    </div>
  );
};

export default Calendar;
