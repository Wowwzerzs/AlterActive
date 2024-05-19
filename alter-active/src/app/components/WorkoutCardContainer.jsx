import React from 'react';
import WorkoutCard from './cards/WorkoutCard'; 

const WorkoutCardContainer = ({ workoutCards }) => {
  // Function to chunk the workoutCards array into chunks of size 3
  const chunkArray = (array, size) => {
    return array.reduce((result, item, index) => {
      const chunkIndex = Math.floor(index / size);
      if (!result[chunkIndex]) {
        result[chunkIndex] = []; // start a new chunk
      }
      result[chunkIndex].push(item);
      return result;
    }, []);
  };

  // Chunk the workoutCards array into groups of 3
  const groupedWorkouts = chunkArray(workoutCards, 3);

  return (
    <div className="grid grid-cols-3 gap-4">
      {groupedWorkouts.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-col space-y-4">
          {row.map((workout, colIndex) => (
            <WorkoutCard
              key={colIndex}
              workout={workout.workout}
              sets={workout.sets}
              reps={workout.reps}
              weights={workout.weights}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutCardContainer;
