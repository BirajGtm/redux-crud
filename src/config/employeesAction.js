export function addEmployee(employee) {
  return {
    type: "ADD_EMPLOYEE",
    payload: employee
  };
}

export function deleteEmployee(id) {
  return {
    type: "DELETE_EMPLOYEE",
    payload: id
  };
}

export function updateEmployee(employee) {
  return {
    type: "UPDATE_EMPLOYEE",
    payload: employee
  };
}

export function initEmployees(employees) {
  return {
    type: "INIT_EMPLOYEES",
    payload: employees
  };
}
