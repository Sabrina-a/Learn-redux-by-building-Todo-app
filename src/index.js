import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // It allows us to "provide" the Redux store to all the components in our application, so they can access the state and dispatch actions.
import { createStore, applyMiddleware } from "redux";
//1-The createStore function is used to create the Redux store, which is the central data store that holds the entire state of your application.
//2-The applyMiddleware function is used to apply middleware to the Redux store. Middleware is a powerful way to extend Redux with custom functionality, such as handling asynchronous actions or logging actions.
import thunk from "redux-thunk";
//The thunk middleware is a popular middleware for Redux that enables you to write action creators that return functions instead of plain objects. This is useful for handling asynchronous actions, such as making API calls.
import rootReducer from "./redux/reducers";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(rootReducer, applyMiddleware(thunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
