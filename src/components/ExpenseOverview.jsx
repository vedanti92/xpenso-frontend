import React, { useEffect, useState } from "react";
import { prepareLineChartData } from "../util/util";
import CustomLineChart from "./CustomLineChart";
import { Plus } from "lucide-react";

function ExpenseOverview({ transactions, onAddExpense }) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const result = prepareLineChartData(transactions);
    console.log(result);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg">Expense Overview</h5>
          <p className="text-xs text-gray-400 mt-0 5">
            Track earnings and analyze trends.
          </p>
        </div>
        <button onClick={onAddExpense} className="add-btn">
          <Plus size={15} /> Add Expense
        </button>
      </div>
      <div className="mt-10 w-full min-w-0 min-h-[300px]">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
}

export default ExpenseOverview;
