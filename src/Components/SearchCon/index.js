import React from "react";

function Search(props) {
  return (
    <div className="searchCon">
      <input
        name="nameInput"
        value={props.nameInput}
        onChange={props.handleInputChange}
        className="inputField"
        placeholder="Search Employees"
      />
      <button className="Btn" onClick={props.handleSort}>
        Sort By Name
      </button>
      <button className="Btn" onClick={props.unSort}>
        un-sort
      </button>
    </div>
  );
}

export default Search;
