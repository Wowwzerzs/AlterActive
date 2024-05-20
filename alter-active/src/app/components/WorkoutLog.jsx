import React from 'react';
import { FaDumbbell, FaClipboardList, FaWeightHanging } from 'react-icons/fa';

const WorkoutLog = ({ date, workouts }) => {
  const dateString = date ? date.toISOString().split('T')[0] : '';

  const workoutsForDate = (workouts || []).filter(workout => workout.date === dateString);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-4 text-gray-900">
      <h2 className="text-2xl font-bold mb-4">
        Workouts for {dateString}
      </h2>
      {workoutsForDate.length > 0 ? (
        workoutsForDate.map((workout, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-100">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{workout.workout}</h3>
            <div className="flex items-center mb-2">
              <FaClipboardList className="text-blue-500 mr-2" />
              <p className="font-medium">Muscle Group: <span className="font-normal">{workout.muscleGroup}</span></p>
            </div>
            <div className="flex items-center mb-2">
              <FaDumbbell className="text-green-500 mr-2" />
              <p className="font-medium">Sets: <span className="font-normal">{workout.sets.join(', ')}</span></p>
            </div>
            <div className="flex items-center mb-2">
              <FaDumbbell className="text-red-500 mr-2" />
              <p className="font-medium">Reps: <span className="font-normal">{workout.reps.join(', ')}</span></p>
            </div>
            <div className="flex items-center">
              <FaWeightHanging className="text-yellow-500 mr-2" />
              <p className="font-medium">Weights: <span className="font-normal">{workout.weights.join(', ')}</span></p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-700">No workouts for this date.</p>
      )}
    </div>
  );
};

export default WorkoutLog;
