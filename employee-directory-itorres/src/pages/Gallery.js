import React, { useEffect, useState } from "react";
import Employees from '../Employees.json'
import Jumbo from '../Components/Jumbo'
import Search from '../Components/SearchCon'



function Gallery() {

   const [employeeState, setEmployeeState] = useState({
      userName: "",
      userPhone: "",
      userImage: "",
      userEmail: ""
   });

   useEffect(() => {
  //  setEmployeeState
  }, []);



  // trying to get my employees
const getEmpoyees = () => {

  console.log(Employees)
}
  

  

    return (
      <div>
        <Jumbo />
        <Search />
      <button onClick={getEmpoyees}>Button</button>
      </div>
    );
  }

  export default Gallery