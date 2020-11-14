import React from 'react'
import Style from './style.css'

function Search(props) {
    return (
        <div className="searchCon row">
            <input name="nameInput col-sm-6" value={props.nameInput} onChange={props.handleInputChange} className="inputField" placeholder="Search Employees"/>
            <button className="Btn col-sm-6" onClick={props.handleSort}>Sort By Name</button>
            <button className="Btn col-sm-6" onClick={props.unSort}>un-sort</button>
        </div>
    )
}

export default Search;