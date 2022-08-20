import React from "react";

import "../App.css";

const ScaleInfo = ({
  scowNumber,
  tareWeight,
  grossWeight,
  fishType,
  netWeight,
  coldStore,
}) => {
  return (
    <div className="text-center">
      <table responsive>
        <tr>
          <th>#</th>
          <th>Scow Number</th>
          {/*<th>Tale </th>*/}
          {/* <th>Gross </th> */}
          <th>Fish Type</th>
          <th>Net Weight</th>
          {/* <th>ColdStore</th> */}
        </tr>

        <tbody>
          <tr>
            <td>1</td>
            <td>{scowNumber}</td>

            <td>{netWeight}</td>
            <td>{fishType}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScaleInfo;
