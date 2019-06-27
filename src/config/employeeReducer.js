let stateCopy;
const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_EMPLOYEE":
      stateCopy = [...state, action.payload];
      // localStorage.setItem("employees", JSON.stringify(stateCopy));
      return stateCopy;

    case "DELETE_EMPLOYEE":
      stateCopy = state.filter(x => x.id !== action.payload);
      // localStorage.setItem("employees", JSON.stringify(stateCopy));
      return stateCopy;

    case "UPDATE_EMPLOYEE":
      stateCopy = state
        .map(employee => {
          const { id, name, e_id, position } = action.payload;
          if (employee.id === id) {
            employee.name = name;
            employee.e_id = e_id;
            employee.position = position;
          }
          return employee;
        })
        .filter(item => item.name !== "Employee Name");
      // localStorage.setItem("employees", JSON.stringify(stateCopy));
      return stateCopy;

    default:
      return state;
  }
};
export default employeeReducer;
