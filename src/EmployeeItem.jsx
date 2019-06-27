import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";

export default class EmployeeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: this.props.employee.name,
      e_id: this.props.employee.e_id,
      position: this.props.employee.position
    };
    this.editEmployee = this.editEmployee.bind(this);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  deleteEmployee() {
    const { id } = this.props.employee;
    this.props.deleteEmployee(id);
  }
  editEmployee() {
    this.setState(prevState => ({
      isEdit: !prevState.isEdit
    }));
  }
  editEmployeeSubmit() {
    const { id } = this.props.employee;
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editEmployeeSubmit(
      id,
      this.state.name,
      this.state.e_id,
      this.state.position
    );
  }
  render() {
    const { name, e_id, position } = this.props.employee;
    return this.state.isEdit === true ? (
      <TableRow style={{ backgroundColor: "#b6c0c854" }} key={this.props.index}>
        <TableCell>
          <TextField
            onChange={event => this.setState({ name: event.target.value })}
            value={this.state.name}
          />
        </TableCell>
        <TableCell>
          <TextField
            onChange={event => this.setState({ e_id: event.target.value })}
            value={this.state.e_id}
          />
        </TableCell>
        <TableCell>
          <TextField
            onChange={event => this.setState({ position: event.target.value })}
            value={this.state.position}
          />
        </TableCell>
        <TableCell>
          <Button
            onClick={this.editEmployeeSubmit}
            variant="contained"
            color="primary"
          >
            <i className="material-icons">save</i>
          </Button>
        </TableCell>
        <TableCell>
          <Button
            onClick={this.editEmployee}
            variant="contained"
            color="secondary"
          >
            <i className="material-icons">cancel</i>
          </Button>
        </TableCell>
      </TableRow>
    ) : (
      <TableRow key={this.props.index}>
        <TableCell>{name}</TableCell>
        <TableCell>{e_id}</TableCell>
        <TableCell>{position}</TableCell>
        <TableCell>
          <Button
            onClick={this.editEmployee}
            variant="contained"
            color="primary"
          >
            <i className="material-icons">edit</i>
          </Button>
        </TableCell>
        <TableCell>
          <Button
            onClick={this.deleteEmployee}
            variant="contained"
            color="secondary"
          >
            <i className="material-icons">delete</i>
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}
