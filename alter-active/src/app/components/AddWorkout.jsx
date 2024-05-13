import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";

// Styled component with Tailwind CSS classes
const Card = styled.div`
  @apply flex-1 min-w-280px p-4 border border-primary-20 rounded-lg shadow-md flex flex-col gap-4;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;
const Title = styled.div`
  @apply font-semibold text-primary text-lg md:text-xl;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const AddWorkout = ({ workout, setWorkout, addNewWorkout, buttonLoading }) => {
  return (
    <Card>
      <Title>Add New Workout</Title>
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
      />
      <Button
        text="Add Workout"
        small
        onClick={() => addNewWorkout()}
        isLoading={buttonLoading}
        isDisabled={buttonLoading}
      />
    </Card>
  );
};

export default AddWorkout;
