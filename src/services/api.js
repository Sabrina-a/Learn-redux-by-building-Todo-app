import axios from "axios";
import {
  fetchTodosSuccess,
  addTodo,
  deleteTodo,
  updateTodo,
} from "../redux/actions";

const apiUrl = "https://jsonplaceholder.typicode.com/todos";

///
//1.The fetchTodos function is an action creator that returns a function (a thunk) instead of a plain object. This is possible because we are using the redux-thunk middleware.
//2.When this thunk action creator is dispatched, Redux recognizes it as a function and passes the dispatch function from the Redux store as an argument to this function.
//3.Inside the returned function, we use axios.get(apiUrl) to make a GET request to the specified API endpoint (apiUrl contains the URL to fetch todos from).
//4.The axios.get function returns a promise, and when the promise resolves successfully (i.e., the API call is successful), we dispatch another action using the dispatch function.
//5.In this case, if the API call is successful, we dispatch the fetchTodosSuccess action, passing the fetched todos (response.data) as the payload. The fetchTodosSuccess action is a regular action creator that returns a plain object with a type and payload.
//6.If there's an error in the API call (e.g., network error or server issue), the catch block will be executed, and we log the error to the console.
///
// Thunk action to fetch todos from the API
export const fetchTodos = () => {
  return (dispatch) => {
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(fetchTodosSuccess(response?.data));
      })
      .catch((error) => {
        console.error("error fetching todos", error);
      });
  };
};

//Thunk action to add a new todo
export const addTodoAsync = (todo) => {
  return (dispatch) => {
    axios
      .post(apiUrl, todo)
      .then((response) => {
        dispatch(addTodo(response?.data));
      })
      .catch((error) => {
        console.error("error adding todo", error);
      });
  };
};

//thunk action to delete a todo
export const deleteTodoAsync = (id) => {
  return (dispatch) => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then(() => {
        dispatch(deleteTodo(id));
      })
      .catch((error) => {
        console.error("error deleting todo", error);
      });
  };
};

//Thunk action to update a todo

export const updateTodoAsync = (todo) => {
  return (dispatch) => {
    axios
      .put(`${apiUrl}/${todo.id}`, todo)
      .then((response) => {
        console.log(response, "response from addTodos");
        dispatch(updateTodo(response.data));
      })
      .catch((error) => {
        console.error("error updating todo:", error);
      });
  };
};
