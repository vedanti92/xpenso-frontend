import { Download, Mail } from "lucide-react";
import React from "react";

function IncomeList({ transactions }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income Sources</h5>
        <div className="flex items-center justify-end gap-2">
          <button className="bg-gray-100 hover:text-blue-500 py-1 px-2 rounded flex items-center gap-1 transition-colors cursor-pointer">
            <Mail size={15} className="text-base" /> Email
          </button>
          <button className="bg-gray-100 hover:text-blue-500 py-1 px-2 rounded flex items-center gap-1 transition-colors cursor-pointer">
            <Download size={15} className="text-base" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeList;
