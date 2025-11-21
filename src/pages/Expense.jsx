import React from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

function Expense() {
  useUser();

  return (
    <div>
      <Dashboard activeMenu="Expense">This is expense page</Dashboard>
    </div>
  );
}

export default Expense;
