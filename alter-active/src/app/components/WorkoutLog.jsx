import React from 'react';

const WorkoutLog = ({ date, workouts }) => {
  const dateString = date ? date.toISOString().split('T')[0] : '';

  const workoutsForDate = (workouts || []).filter(workout => workout.date === dateString);

  return (
    <div className="bg-white p-6 rounded shadow-md mt-4 text-black">
      <h2 className="text-2xl font-bold text-black mb-4">
        Workouts for {dateString}
      </h2>
      {workoutsForDate.length > 0 ? (
        workoutsForDate.map((workout, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{workout.worout}</h3>
            <p>Muscle Group: {workout.muscleGroup}</p>
            <p>Sets: {workout.sets.join(', ')}</p>
            <p>Reps: {workout.reps.join(', ')}</p>
            <p>Weights: {workout.weights.join(', ')}</p>
          </div>
        ))
      ) : (
        <p>No workouts for this date.</p>
      )}
    </div>
  );
};

export default WorkoutLog;

