import React, { useEffect, useState } from "react";
import { prepareIncomeLineChartData } from "../util/util";
import CustomLineChart from "./CustomLineChart";

function IncomeOverview({ transactions }) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareIncomeLineChartData(transactions);
    console.log(result);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div className="card mt-6">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Income Overview</h5>
          <p className="text-xs text-gray-400 mt-0 5">
            Track your earnings and analyze income trends over time.
          </p>
        </div>
      </div>
      <div className="mt-10 w-full min-w-0 min-h-[300px]">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
}

export default IncomeOverview;
