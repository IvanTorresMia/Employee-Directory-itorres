import React, { useEffect, useState } from "react";
import Employees from "../Employees.json";
import Jumbo from "../Components/Jumbo";
import Search from "../Components/SearchCon";
import TableHeader from "../Components/TableHeader";
import EmployeeContext from "../utils/EmployeeContext";

let employeeArr = [];

function Gallery() {
  const [userName, setUserName] = useState("");

  const [employeeState, setEmployeeState] = useState({
    name: "",
    email: "",
    image: "",
    phone: "",
    age: "",
  });

  // useEffect(() => {
  //   getEmpoyees();
  // }, []);

  // const [context, setcontext] = useContext(EmployeeContext);

  // trying to get my employees



  const getEmpoyees = () => {
    
    

  };

  getEmpoyees();

  return (
    <div>
      <Jumbo />
      <EmployeeContext.Provider>
        <Search />
        <TableHeader />
      </EmployeeContext.Provider>
    </div>
  );
}

export default Gallery;
