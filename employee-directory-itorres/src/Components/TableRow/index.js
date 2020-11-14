import React, { useContext } from "react";
import Style from "./style.css";

function TableRow(props) {
  const { name, email, phone, age, image } = props;
  return (
    <tbody>
    <tr className="tableRow">
      <th>
      <img scope="row"src={image} />
      </th>
      <td className="col">{name}</td>
      <td className="col">{email}</td>
      <td className="col">{phone}</td>
      <td className="col">{age}</td>
    </tr>
    </tbody>
  );
}

export default TableRow;
