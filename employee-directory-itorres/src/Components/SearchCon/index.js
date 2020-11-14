import React from 'react'
import Style from './style.css'

function Search(props) {
    return (
        <div className="searchCon">
            <input name="nameInput" value={props.nameInput} onChange={props.handleInputChange} className="inputField" placeholder="Search Employees"/>
        </div>
    )
}

export default Search;