import React, { useContext } from 'react'
import Style from './style.css'
import EmployeeContext from '../../utils/EmployeeContext'


function TableRow() {
    const { Employee } = useContext(EmployeeContext)
    return (
        <div className="tableHead">
        {/* <img src={Employee.image} /> */}
        <p>{Employee.name}</p>
        {/* <p>{Employee.email}</p>
        <p>{Employee.phone}</p>
        <p>{Employee.name}</p> */}
        </div>
    )
}

export default TableRow;