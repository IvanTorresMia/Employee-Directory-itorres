import React, { useState } from "react";
import Employees from "../Employees.json";
import Jumbo from "../Components/Jumbo";
import Search from "../Components/SearchCon";
import TableHeader from "../Components/TableHeader";
import EmployeeContext from "../utils/EmployeeContext";

function Gallery() {
  const [employeesState, setEmployeesState] = useState(Employees);
  const [inputState, setInputState] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    const filtered = Employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
        employee.name.last.toLowerCase().includes(value.toLowerCase())
    );
    setInputState(value);
    setEmployeesState(filtered);
  };

  const handleSort = () => {
    const sorted = employeesState;
    sorted.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    console.log(sorted);
    setEmployeesState(sorted);
  };

  return (
    <div>
      <Jumbo />
      <Search nameInput={inputState} handleInputChange={handleInputChange} />
      <EmployeeContext.Provider value={employeesState}>
        <TableHeader handleSort={handleSort} />
      </EmployeeContext.Provider>
    </div>
  );
}

export default Gallery;
