// components/WorkoutCard.js
"use client";
import React from 'react';

const WorkoutCard = ({ workout, sets, reps, weights }) => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-lg mb-3 max-w-md mx-auto">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
        .roboto-font {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 roboto-font">{workout}</h3>
      <div className="flex flex-col space-y-1 roboto-font">
        <div className="flex justify-between text-md text-gray-600">
          <div className="font-medium">Set</div>
          <div className="font-medium">Reps</div>
          <div className="font-medium">Weight (lbs)</div>
        </div>
        {sets.map((set, index) => (
          <div key={index} className="flex justify-between text-md text-gray-800">
            <div>{index + 1}</div>
            <div>{reps[index]}</div>
            <div>{weights[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
