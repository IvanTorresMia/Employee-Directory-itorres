import React, { useContext } from "react";
import Style from "./style.css";
import EmployeeContext from "../../utils/EmployeeContext";

function TableRow() {
  const { name, email, image, phone, age } = useContext(EmployeeContext);
  return (
    <div className="tableHead">
      <img src={image} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{age}</p>
    </div>
  );
}

export default TableRow;
