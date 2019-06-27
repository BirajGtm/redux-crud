import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import employeeReducer from "./config/employeeReducer";
import { Provider } from "react-redux";

let initialState = [
  {
    id: "1",
    name: "Prayatna",
    e_id: "Bottle-1",
    position: "Frontend Developer"
  },
  {
    id: "2",
    name: "Dipesh",
    e_id: "Bottle-2",
    position: "HR Manager"
  }
];

const store = createStore(
  employeeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
