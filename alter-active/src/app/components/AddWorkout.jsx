import { useState, useEffect } from "react";
import WorkoutCard from './cards/WorkoutCard'; 
import WorkoutCardContainer from "./WorkoutCardContainer";

const AddWorkout = () => {
  const [workouts, setWorkouts] = useState([]);
  const [selectedWorkout, setSelectedWorkout] = useState("");
  const [sets, setSets] = useState(["1"]);
  const [reps, setReps] = useState([""]);
  const [weights, setWeights] = useState([""]);
  const [workoutCards, setWorkoutCards] = useState([]);

  // Fetch workouts from the API
  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const data = await res.json();
      setWorkouts(data);
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

  const handleAddWorkout = () => {
    const newWorkout = {
      workout: selectedWorkout,
      sets,
      reps,
      weights,
    };
    setWorkoutCards([...workoutCards, newWorkout]);
    // Clear the form fields
    setSelectedWorkout("");
    setSets(["1"]);
    setReps([""]);
    setWeights([""]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Workout</h2>
        <div className="mb-4">
          <label htmlFor="workout" className="block text-gray-700 mb-2">Select Workout</label>
          <select
            id="workout"
            className="w-full p-2 border rounded"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
          >
            <option value="" disabled>Select a workout</option>
            {workouts.map((workout) => (
              <option key={workout.id} value={workout.name}>
                {workout.name}
              </option>
            ))}
          </select>
        </div>
        {sets.map((set, index) => (
          <div key={index} className="mb-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor={`sets-${index}`} className="block text-gray-700 mb-2">Sets</label>
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
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Workout Cards</h2>
        <WorkoutCardContainer workoutCards={workoutCards} />
      </div>
    </div>
  );
};

export default AddWorkout;
