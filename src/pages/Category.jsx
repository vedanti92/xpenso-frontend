import React from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import { Plus } from "lucide-react";

function Category() {
  useUser();

  return (
    <div>
      <Dashboard activeMenu="Category">
        <div className="my-5 mx-auto">
          {/* Button to add category list */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">All Categories</h2>
            <button className="add-btn flex items-center gap-1">
              <Plus size={15} /> Add Category
            </button>
          </div>

          {/* Category list */}

          {/* Add category model */}

          {/* Update category model */}
        </div>
      </Dashboard>
    </div>
  );
}

export default Category;
