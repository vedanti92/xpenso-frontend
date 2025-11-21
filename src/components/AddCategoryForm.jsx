import React, { useState } from "react";
import Input from "./Input";
import EmojiPickerPopup from "./EmojiPickerPopup";

function AddCategoryForm({ onAddCategory }) {
  const [category, setCategory] = useState({
    name: "",
    type: "",
    icon: "",
  });

  const categoryTypeOptions = [
    { value: "", label: "Select Category", disabled: true },
    {
      value: "income",
      label: "Income",
    },
    {
      value: "expense",
      label: "Expense",
    },
  ];

  const handleChange = (key, value) => {
    setCategory({ ...category, [key]: value });
  };

  const handleSubmit = () => {
    onAddCategory(category);
  };

  return (
    <div className="p-4">
      <EmojiPickerPopup
        icon={category.icon}
        onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
      />

      <Input
        value={category.name}
        onChange={({ target }) => handleChange("name", target.value)}
        label="Category Name"
        placeholder="e.g. Salary, Groceries, Travel"
        type="text"
      />

      <Input
        label="Category Type"
        value={category.type}
        onChange={({ target }) => handleChange("type", target.value)}
        isSelect={true}
        options={categoryTypeOptions}
      />

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleSubmit}
          className="add-btn add-btn-fill"
        >
          Add Category
        </button>
      </div>
    </div>
  );
}

export default AddCategoryForm;
