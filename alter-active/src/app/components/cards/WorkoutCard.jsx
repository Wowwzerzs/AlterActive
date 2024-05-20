import React, { useState } from 'react';

const WorkoutCard = ({ workout, sets, reps, weights, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSets, setEditedSets] = useState(sets);
  const [editedReps, setEditedReps] = useState(reps);
  const [editedWeights, setEditedWeights] = useState(weights);

  const handleSave = () => {
    const updatedWorkout = {
      workout,
      sets: editedSets,
      reps: editedReps,
      weights: editedWeights,
    };
    onUpdate(updatedWorkout);
    setIsEditing(false);
  };

  const handleSetChange = (index, value) => {
    const newSets = [...editedSets];
    newSets[index] = value;
    setEditedSets(newSets);
  };

  const handleRepChange = (index, value) => {
    const newReps = [...editedReps];
    newReps[index] = value;
    setEditedReps(newReps);
  };

  const handleWeightChange = (index, value) => {
    const newWeights = [...editedWeights];
    newWeights[index] = value;
    setEditedWeights(newWeights);
  };

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg mb-3 max-w-md mx-auto text-black">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{workout}</h3>
      {isEditing ? (
        <div className="mt-3">
          {editedSets.map((set, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:space-x-2 mb-2">
              <input
                type="text"
                value={editedSets[index]}
                className="w-full sm:w-1/3 p-1 border rounded text-gray-900 mb-2 sm:mb-0"
                onChange={(e) => handleSetChange(index, e.target.value)}
              />
              <input
                type="text"
                value={editedReps[index]}
                className="w-full sm:w-1/3 p-1 border rounded text-gray-900 mb-2 sm:mb-0"
                onChange={(e) => handleRepChange(index, e.target.value)}
              />
              <input
                type="text"
                value={editedWeights[index]}
                className="w-full sm:w-1/3 p-1 border rounded text-gray-900"
                onChange={(e) => handleWeightChange(index, e.target.value)}
              />
              <button
                className="text-red-500 hover:text-red-700 font-bold ml-2"
                onClick={() => {
                  const updatedSets = [...editedSets];
                  updatedSets.splice(index, 1);
                  setEditedSets(updatedSets);

                  const updatedReps = [...editedReps];
                  updatedReps.splice(index, 1);
                  setEditedReps(updatedReps);

                  const updatedWeights = [...editedWeights];
                  updatedWeights.splice(index, 1);
                  setEditedWeights(updatedWeights);
                }}
              >
                Delete
              </button>
            </div>
          ))}
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-2"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between text-md text-gray-600">
            <div className="font-medium px-2">Set</div>
            <div className="font-medium px-2">Reps</div>
            <div className="font-medium px-2">Weight (lbs)</div>
          </div>
          {sets.map((set, index) => (
            <div key={index} className="flex justify-between text-md text-gray-800">
              <div className="px-2">{set}</div>
              <div className="px-2">{reps[index]}</div>
              <div className="px-2">{weights[index]}</div>
              <button
                className="text-blue-500 hover:text-blue-700 font-bold"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </div>
          ))}
          <button
            className="text-red-500 hover:text-red-700 font-bold mt-2"
            onClick={onDelete}
          >
            Delete Card
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutCard;
