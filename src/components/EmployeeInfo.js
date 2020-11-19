import React from "react";
import Moment from "moment";

const EmployeeInfo = (props) => {
  let fixedDate = Moment(props.dob).format("LL");
  return (
    <tr className="tr">
      <td><img src={props.icon} alt={props.firstName}/></td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{fixedDate}</td>
    </tr>
  )
}

export default EmployeeInfo;