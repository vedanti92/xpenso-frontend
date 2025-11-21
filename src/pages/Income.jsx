import React from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

function Income() {
  useUser();

  return (
    <div>
      <Dashboard activeMenu="Income">This is income page</Dashboard>
    </div>
  );
}

export default Income;
