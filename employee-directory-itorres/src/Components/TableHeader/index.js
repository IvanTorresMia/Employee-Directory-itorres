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
    <div className="row">
      <div className="tableHead row">
        <h2 className="col text">Photo</h2>
        <h2 className="col text">
          
          Name{" "}<button onClick={props.handleSort}>sort</button>
        </h2>

        <h2 className="col text">Email</h2>
        <h2 className="col text">Phone</h2>
        <h2 className="col text">Age</h2>
      </div>
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
    </div>
  );
}

export default TableHeader;
