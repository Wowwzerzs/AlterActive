import React from 'react';
import WorkoutCard from './cards/WorkoutCard';

const WorkoutCardContainer = ({ workoutCards, onUpdate, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {workoutCards.map((card, index) => (
        <WorkoutCard
          key={index}
          workout={card.workout}
          sets={card.sets}
          reps={card.reps}
          weights={card.weights}
          onUpdate={(updatedWorkout) => onUpdate(index, updatedWorkout)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
};

export default WorkoutCardContainer;
