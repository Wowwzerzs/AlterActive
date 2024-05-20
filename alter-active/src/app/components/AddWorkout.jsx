import React, { useState, useEffect } from "react";
import WorkoutCardContainer from "./WorkoutCardContainer";
import Calendar from "./Calendar";
import WorkoutLog from "./WorkoutLog";

const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState("");
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [sets, setSets] = useState(["1"]);
  const [reps, setReps] = useState([""]);
  const [weights, setWeights] = useState([""]);
  const [workoutCards, setWorkoutCards] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();
      setWorkouts(data || []);
    };
    fetchWorkouts();
  }, []);

  const handleSetChange = (index, value) => {
    const newSets = [...sets];
    newSets[index] = value;
    setSets(newSets);
  };

  const handleRepChange = (index, value) => {
    const newReps = [...reps];
    newReps[index] = value;
    setReps(newReps);
  };

  const handleWeightChange = (index, value) => {
    const newWeights = [...weights];
    newWeights[index] = value;
    setWeights(newWeights);
  };

  const addSet = () => {
    const nextSetNumber = sets.length + 1;
    setSets([...sets, nextSetNumber.toString()]);
    setReps([...reps, ""]);
    setWeights([...weights, ""]);
  };

  const deleteSet = (index) => {
    const newSets = sets.filter((_, i) => i !== index);
    const newReps = reps.filter((_, i) => i !== index);
    const newWeights = weights.filter((_, i) => i !== index);
    setSets(newSets);
    setReps(newReps);
    setWeights(newWeights);
  };

  const handleAddWorkout = () => {
    const newWorkout = {
      workout: selectedWorkout,
      sets,
      reps,
      weights,
      muscleGroup: selectedMuscleGroup,
      date: selectedDate.toISOString().split('T')[0],
    };
    setWorkoutCards([...workoutCards, newWorkout]);
    setSelectedMuscleGroup("");
    setSelectedWorkout("");
    setSets(["1"]);
    setReps([""]);
    setWeights([""]);
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkoutCards = [...workoutCards];
    updatedWorkoutCards.splice(index, 1);
    setWorkoutCards(updatedWorkoutCards);
  };

  const handleUpdateWorkout = (index, updatedWorkout) => {
    const updatedWorkoutCards = [...workoutCards];
    updatedWorkoutCards[index] = updatedWorkout;
    setWorkoutCards(updatedWorkoutCards);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      <div className="bg-white p-6 rounded shadow-md flex-1 text-black">
        <h2 className="text-2xl font-bold text-black mb-4">Add Workout</h2>
        <div className="mb-4">
          <label htmlFor="muscleGroup" className="block text-gray-700 mb-2">Muscle Group</label>
          <input
            type="text"
            id="muscleGroup"
            className="w-full p-2 border rounded text-gray-900"
            value={selectedMuscleGroup}
            onChange={(e) => setSelectedMuscleGroup(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="workout" className="block text-gray-700 mb-2">Workout Name</label>
          <input
            type="text"
            id="workout"
            className="w-full p-2 border rounded text-gray-900"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
          />
        </div>

        {sets.map((set, index) => (
          <div key={index} className="mb-4">
            <div className="flex space-x-4 items-end">
              <div className="flex-1">
                <label htmlFor={`sets-${index}`} className="block text-gray-700 mb-2">Set {index + 1}</label>
                <input
                  type="number"
                  id={`sets-${index}`}
                  className="w-full p-2 border rounded bg-white text-gray-900"
                  value={sets[index]}
                  onChange={(e) => handleSetChange(index, e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor={`reps-${index}`} className="block text-gray-700 mb-2">Reps</label>
                <input
                  type="number"
                  id={`reps-${index}`}
                  className="w-full p-2 border rounded bg-white text-gray-900"
                  value={reps[index]}
                  onChange={(e) => handleRepChange(index, e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label htmlFor={`weights-${index}`} className="block text-gray-700 mb-2">Weight (lbs)</label>
                <input
                  type="number"
                  id={`weights-${index}`}
                  className="w-full p-2 border rounded bg-white text-gray-900"
                  value={weights[index]}
                  onChange={(e) => handleWeightChange(index, e.target.value)}
                />
              </div>
              {index > 0 && (
                <button
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  onClick={() => deleteSet(index)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
        <div className="flex space-x-4">
          <button
            className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            onClick={addSet}
          >
            Add Set
          </button>
          <button
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            onClick={handleAddWorkout}
          >
            Add Workout
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Workout Cards</h2>
          <WorkoutCardContainer
            workoutCards={workoutCards}
            onUpdate={handleUpdateWorkout}
            onDelete={handleDeleteWorkout}
            />
            </div>
            </div>
            <div className="flex-1">
            <Calendar workoutData={workoutCards} onDateClick={handleDateClick} />
            <WorkoutLog date={selectedDate} workouts={workoutCards} />
            </div>
            </div>
            );
            };
            
            export default AddWorkout;
