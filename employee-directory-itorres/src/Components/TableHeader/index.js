import React, { useEffect, useContext } from "react";
import Style from "./style.css";
import TableRow from "../TableRow";
import EmployeeContext from "../../utils/EmployeeContext";

function TableHeader(props) {
  const employees = useContext(EmployeeContext);
  console.log(employees);

  useEffect(() => {
    console.log("im rendering");
  }, [employees]);

  return (
    <div className="container">
    <table className="table table-striped">
      <thead>
        <tr className="tableHead">
        <th scope="col" className="text">Photo</th>
        <th  scope="col" className="text">Name </th>
        <th scope="col" className="text">Email</th>
        <th scope="col" className="text">Phone</th>
        <th scope="col" className="text">Age</th>
        </tr>
        </thead>
      {employees.map((employee, i) => (
        <TableRow
          key={i}
          image={employee.picture.thumbnail}
          name={`${employee.name.first} ${employee.name.last}`}
          email={employee.email}
          phone={employee.phone}
          age={employee.dob.age}
        />
      ))}
    </table>
    </div>
  );
}

export default TableHeader;

// <span className="btn" onClick={props.handleSort}>sort</span>