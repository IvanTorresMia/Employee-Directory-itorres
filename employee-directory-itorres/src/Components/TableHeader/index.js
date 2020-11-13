import React from 'react'
import Style from './style.css'
import TableRow from '../TableRow'

function TableHeader() {
    return (
        <div className="row">
        <div className="tableHead row">
            <h2 className="col text">Photo</h2>
            <h2 className="col text">Name</h2>
            <h2 className="col text">Email</h2>
            <h2 className="col text">Phone</h2>
            <h2 className="col text">Age</h2>
        </div>
        <TableRow />
        </div>
    )
}

export default TableHeader;