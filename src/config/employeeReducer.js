let newState;
const employeeReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_EMPLOYEES":
      newState = action.payload;
      return newState;

    case "ADD_EMPLOYEE":
      newState = [...state, action.payload];
      return newState;

    case "DELETE_EMPLOYEE":
      newState = state.filter(x => x.id !== action.payload);
      return newState;

    case "UPDATE_EMPLOYEE":
      newState = state.map(employee => {
        const { id, name, e_id, position } = action.payload;
        if (employee.id === id) {
          employee.name = name;
          employee.e_id = e_id;
          employee.position = position;
        }
        return employee;
      });
      return newState;

    default:
      return state;
  }
};
export default employeeReducer;
