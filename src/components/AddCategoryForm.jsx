import React, { useState } from "react";
import Input from "./Input";

function AddCategoryForm() {
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

  return (
    <div className="p-4">
      <Input
        value={category.name}
        onChange={(target) => handleChange("name", target.value)}
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
    </div>
  );
}

export default AddCategoryForm;
