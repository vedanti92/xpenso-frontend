import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import IncomeList from "../components/IncomeList";
import Model from "../components/Model";
import { Plus } from "lucide-react";

function Income() {
  const [incomeData, setIncomeData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openAddIncomeModel, setOpenAddIncomeModel] = useState(false);
  const [openDeleteAlert, setOpenDeleteAlert] = useState({
    show: false,
    data: null,
  });

  const fetchIncomeDetails = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_INCOMES);
      if (response.status === 200) {
        setIncomeData(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch income details: ", error);
      toast.error(
        error.response.data.message || "Failed to fetch income details."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncomeDetails();
  }, []);

  useUser();

  return (
    <div>
      <Dashboard activeMenu="Income">
        <div className="my-5 mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              {/* Overview for income with line chart */}

              <button
                onClick={() => setOpenAddIncomeModel(true)}
                className="add-btn"
              >
                <Plus size={15} /> Add Income
              </button>
            </div>

            <IncomeList
              transactions={incomeData}
              onDelete={(id) => console.log("deleting the income", id)}
            />

            {/* Add income model */}
            <Model
              isOpen={openAddIncomeModel}
              onClose={() => setOpenAddIncomeModel(false)}
              title="Add Income"
            >
              Income form
            </Model>
          </div>
        </div>
      </Dashboard>
    </div>
  );
}

export default Income;
