// components/WorkoutCard.js
"use client";
import React from 'react';

const WorkoutCard = ({ workout, sets, reps, weights }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h3 className="text-xl font-bold">{workout}</h3>
      {sets.map((set, index) => (
        <p key={index}>
          Set {index + 1}: {set}, Reps: {reps}, {weights[index]} lbs
        </p>
      ))}
    </div>
  );
};

export default WorkoutCard;
