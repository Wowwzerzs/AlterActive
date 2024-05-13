import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const CategoryChart = ({ data }) => {
  return (
    <div className="flex-1 min-w-280px p-6 border border-primary-20 rounded-lg shadow-md flex flex-col gap-6">
      <div className="font-semibold text-primary text-lg md:text-xl">
        Weekly Calories Burned
      </div>
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
    </div>
  );
};

export default CategoryChart;
