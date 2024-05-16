import React from "react";
import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

// Styled component with Tailwind CSS classes
const Card = styled.div`
  @apply flex-1 min-w-280px p-6 border border-primary-20 rounded-lg shadow-md flex flex-col gap-6;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.div`
  @apply font-semibold text-primary text-lg;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const WeeklyStatCard = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <BarChart
          xAxis={[
            { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
          ]}
          series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
          height={300}
        />
      )}
    </Card>
  );
};

export default WeeklyStatCard;
