import React from "react";
import styled from "styled-components";
import { PieChart } from "@mui/x-charts/PieChart";

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

const CategoryChart = ({ data }) => {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.pieChartData && (
        <PieChart
          series={[
            {
              data: data?.pieChartData,
              innerRadius: 30,
              outerRadius: 120,
              paddingAngle: 5,
              cornerRadius: 5,
            },
          ]}
          height={300}
        />
      )}
    </Card>
  );
};

export default CategoryChart;
