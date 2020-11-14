import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  email: "",
  image: "",
  phone: "",
  age: ""
});

export default EmployeeContext;