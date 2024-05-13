import { FitnessCenterRounded, TimelapseRounded } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

// Styled component with Tailwind CSS classes
const Card = styled.div`
  @apply flex-1 min-w-250px max-w-400px p-4 md:p-6 border border-primary-20 rounded-lg shadow-md flex flex-col gap-4;
  @media (max-width: 600px) {
    padding: 12px 14px;
  }
`;

const Category = styled.div`
  @apply w-max text-sm font-medium text-primary bg-primary-20 rounded-lg px-3 py-1;
`;

const Name = styled.div`
  @apply text-xl font-semibold text-primary;
`;

const Sets = styled.div`
  @apply text-base font-medium text-secondary;
`;

const Flex = styled.div`
  @apply flex gap-4;
`;

const Details = styled.div`
  @apply flex items-center gap-2 text-base font-medium text-primary;
`;

const WorkoutCard = ({ workout }) => {
  return (
    <Card>
      <Category>#{workout?.category}</Category>
      <Name>{workout?.workoutName}</Name>
      <Sets>
        Count: {workout?.sets} sets X {workout?.reps} reps
      </Sets>
      <Flex>
        <Details>
          <FitnessCenterRounded sx={{ fontSize: "20px" }} />
          {workout?.weight} kg
        </Details>
        <Details>
          <TimelapseRounded sx={{ fontSize: "20px" }} />
          {workout?.duration} min
        </Details>
      </Flex>
    </Card>
  );
};

export default WorkoutCard;
