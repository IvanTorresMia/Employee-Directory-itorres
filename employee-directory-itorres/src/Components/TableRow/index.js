import React, { useContext } from "react";
import Style from "./style.css";

function TableRow(props) {
  const { name, email, phone, age, image } = props;
  return (
    <div className="tableHead row">
      <img src={image} />
      <p className="col">{name}</p>
      <p className="col">{email}</p>
      <p className="col">{phone}</p>
      <p className="col">{age}</p>
    </div>
  );
}

export default TableRow;
