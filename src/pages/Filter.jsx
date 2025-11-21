import React from "react";
import Dashboard from "../components/Dashboard";
import { useUser } from "../hooks/useUser";

function Filter() {
  useUser();

  return (
    <div>
      <Dashboard activeMenu="Filters">This is filters page</Dashboard>
    </div>
  );
}

export default Filter;
