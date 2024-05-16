import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

// Define the light theme directly in the file
const lightTheme = {
  primary: "#007AFF",
  text_primary: "#404040",
};

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return (
    <div className="flex-1 min-w-280px p-4 border border-primary-20 rounded-lg shadow-md flex flex-col gap-4">Add Workout
    
      <div className="font-semibold text-black text-lg md:text-xl">Add New Workout</div>
      <TextInput
        label="Workout"
        textArea
        rows={10}
        placeholder={`Enter in this format:

#Category
-Workout Name
-Sets
-Reps
-Weight
-Duration`}
        value={workout}
        handelChange={(e) => setWorkout(e.target.value)}
        labelClassName="text-black" // Apply text-black class to the label
      />
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()} // Ensure addNewWorkout is a function
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </div>
  );
};

export default AddWorkout;
