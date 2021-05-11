import React from "react";

function TableRow(props) {
  const { name, email, phone, age, image } = props;
  return (
    <tbody className="tableRow">
      <tr>
        <th>
          <img src={image} />
        </th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{age}</td>
      </tr>
    </tbody>
  );
}

export default TableRow;
