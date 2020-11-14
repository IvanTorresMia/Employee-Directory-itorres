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
    // console.log("sorter: " + JSON.stringify(employeesState))
  };


async function handleSort(event) {
    event.preventDefault();
 
   const sorted = await employeesState.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
    setEmployeesState(sorted);
     console.log(sorted)
    
  };


  
  return (
    <div>
      <Jumbo />
      <Search nameInput={inputState} handleInputChange={handleInputChange} />
      <EmployeeContext.Provider value={employeesState}>
        <TableHeader handleSort={handleSort}/>
      </EmployeeContext.Provider>
    </div>
  );
}

export default Gallery;
