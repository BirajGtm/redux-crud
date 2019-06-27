import React, { Component } from "react";
import EmployeeItem from "./EmployeeItem.jsx";
import TableBody from "@material-ui/core/TableBody";
export default class EmployeeList extends Component {
  render() {
    let employees = this.props.employeeList;
    const trItem = employees.map((item, index) => (
      <EmployeeItem
        key={index}
        employee={item}
        editEmployeeSubmit={this.props.editEmployeeSubmit}
        deleteEmployee={this.props.deleteEmployee}
      />
    ));
    return <TableBody>{trItem}</TableBody>;
  }
}
