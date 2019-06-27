import React, { Component } from "react";
import EmployeeList from "./EmployeeList";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TableCell from "@material-ui/core/TableCell";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  addEmployee,
  deleteEmployee,
  updateEmployee
} from "./config/employeesAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.editEmployeeSubmit = this.editEmployeeSubmit.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.addNewEmployee = this.addNewEmployee.bind(this);
  }

  addNewEmployee() {
    this.props.addEmployee({
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: "Employee Name",
      e_id: "Employee ID",
      position: "Employee Position"
    });
  }

  deleteEmployee(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      this.props.deleteEmployee(id);
    }
  }

  editEmployeeSubmit(id, name, e_id, position) {
    this.props.updateEmployee({ id, name, e_id, position });
  }

  render() {
    console.log(this.props, "props");
    return (
      <Box component="span" m={1}>
        <Container maxWidth="lg">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Employee Information
              </Typography>
            </Toolbar>
          </AppBar>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Employee ID</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Edit/Save</TableCell>
                  <TableCell>Delete/Cancel</TableCell>
                </TableRow>
              </TableHead>
              <EmployeeList
                deleteEmployee={this.deleteEmployee}
                employeeList={this.props.employeeList}
                editEmployeeSubmit={this.editEmployeeSubmit}
              />
            </Table>
          </Paper>

          <Divider />
          <Button
            style={{ marginTop: "10px" }}
            onClick={this.addNewEmployee}
            variant="contained"
            color="primary"
          >
            <i className="material-icons">add_circle</i>
          </Button>
        </Container>
      </Box>
    );
  }
}
const mapStateToProps = state => {
  return {
    employeeList: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addEmployee: addEmployee,
      deleteEmployee: deleteEmployee,
      updateEmployee: updateEmployee
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
