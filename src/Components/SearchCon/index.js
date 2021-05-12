import React from "react";

function Search(props) {
  return (
    <div className="searchCon">
      <input
        type="title"
        name="nameInput"
        value={props.nameInput}
        onChange={props.handleInputChange}
        className="inputField"
        placeholder="Search Employees"
      />
      <button className="rounded btn" onClick={props.handleSort}>
        Sort By Name
      </button>
      <button className="rounded btn" onClick={props.unSort}>
        un-sort
      </button>
    </div>
  );
}

export default Search;
