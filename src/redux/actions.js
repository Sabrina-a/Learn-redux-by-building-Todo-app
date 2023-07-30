import {
  fetchTodos as fetchTodosApi,
  addTodo as addTodoApi,
  deleteTodo as deleteTodoApi,
} from "../services/api";

///Action Types

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
// export const FETCH_TODOS_FAILIURE = "FETCH_TODOS_FAILIURE";    //included  or  not ?

//Actions Creators

//payload ::Any additional data or information required to perform the action. It contains the data that will be used to update the state in response to the action.

export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});
export const updateTodo = (todo) => ({
  type: "UPDATE_TODO",
  payload: todo,
});

export const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: todos,
});
