import React, { useState } from "react";
import Employees from "../Employees.json";
import Hero from "../Components/Hero";
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

  function handleSort(event) {
    event.preventDefault();

    const sorted = employeesState.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    setEmployeesState([...sorted]);
    console.log(sorted);
  }

  function unSort(event) {
    event.preventDefault();

    const arr = employeesState;
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * arr.length);
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    setEmployeesState([...arr]);
  }

  return (
    <>
      <Hero />
      <div className="row">
        <EmployeeContext.Provider value={employeesState}>
          <div className="col">
            <Search
              nameInput={inputState}
              handleInputChange={handleInputChange}
              handleSort={handleSort}
              unSort={unSort}
            />
          </div>
          <div className="col">
            <TableHeader />
          </div>
        </EmployeeContext.Provider>
      </div>
    </>
  );
}

export default Gallery;
