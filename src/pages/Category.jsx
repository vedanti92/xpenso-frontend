import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";
import { Plus } from "lucide-react";
import CategoryList from "../components/CategoryList";
import axiosConfig from "../util/axiosConfig";
import { API_ENDPOINTS } from "../util/apiEndpoints";
import toast from "react-hot-toast";
import Model from "../components/Model";
import AddCategoryForm from "../components/AddCategoryForm";

function Category() {
  useUser();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [openAddCategoryModel, setOpenAddCategoryModel] = useState(false);
  const [openEditCategoryModel, setEditAddCategoryModel] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategoryDetails = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await axiosConfig.get(API_ENDPOINTS.GET_ALL_CATEGORIES);
      if (response.status === 200) {
        console.log("Categories: ", response.data);
        setCategoryData(response.data);
      }
    } catch (error) {
      console.error("Something went wrong. Please try again later.", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, []);

  const handleAddCategory = (category) => {
    console.log("Category added successfully!", category);
  };

  return (
    <div>
      <Dashboard activeMenu="Category">
        <div className="my-5 mx-auto">
          {/* Button to add category list */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-semibold">All Categories</h2>
            <button
              onClick={() => setOpenAddCategoryModel(true)}
              className="add-btn flex items-center gap-1 cursor-pointer bg-green-100 py-1 px-2 rounded hover:bg-green-200"
            >
              <Plus size={15} /> Add Category
            </button>
          </div>

          {/* Category list */}
          <CategoryList categories={categoryData} />

          {/* Add category model */}
          <Model
            title="Add Category"
            isOpen={openAddCategoryModel}
            onClose={() => setOpenAddCategoryModel(false)}
          >
            <AddCategoryForm onAddCategory={handleAddCategory} />
          </Model>

          {/* Edit category model */}
        </div>
      </Dashboard>
    </div>
  );
}

export default Category;
