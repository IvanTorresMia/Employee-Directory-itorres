import React, { useEffect, useState } from "react";
import API from "../utils/API";



function Gallery() {

   const [employeeState, setEmployeeState] = useState({
      userName: "",
      userPhone: "",
      userImage: "",
      userEmail: ""
   });

  


  // trying to get my employees

  // function loadEmployees() {
  //   API.getEmployees(results).then((function(res) {
  //     console.log(res)
  //   }))
  // }

    return (
      <div>
       <h1>Hi</h1>
      </div>
    );
  }

  export default Gallery