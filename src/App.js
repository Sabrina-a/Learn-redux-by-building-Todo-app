import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchTodos,
  addTodoAsync,
  deleteTodoAsync,
  updateTodoAsync,
} from "./services/api";

//the props todos, fetchTodos, addTodoAsync, deleteTodoAsync, and updateTodoAsync are being passed so that the component can interact with the Redux store and perform various actions.
function App({
  todos,
  fetchTodos,
  addTodoAsync,
  deleteTodoAsync,
  updateTodoAsync,
}) {
  // console.log("first", todos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  useEffect(() => {
    // Fetch todos from the API and update the Redux store
    fetchTodos();
  }, []);

  const handleAddTodo = () => {
    const newTodo = {
      // id: Math.random().toString(),
      title: newTodoTitle,
      completed: false,
    };
    // Add the new todo to the server using an API call and update the Redux store
    addTodoAsync(newTodo);
    setNewTodoTitle("");
  };

  const handleUpdateTodo = (todo) => {
    // Toggle the completion status of the todo on the server using an API call and update the Redux store
    updateTodoAsync({
      ...todo,
      completed: !todo.completed,
    });
  };
  const handleDeleteTodo = (id) => {
    // Delete the todo from the server using an API call and update the Redux store
    deleteTodoAsync(id);
  };
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input
          type={"text"}
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
                onClick={() => handleUpdateTodo(todo)}
              >
                {todo.title}
              </span>
              <button onClick={() => handleDeleteTodo(todo.id)}> Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
//mapStateToProps is a function that maps the Redux state to the component props. In this case, it maps the todos state to the todos prop.
const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps, {
  // we are using connect to connect the App component to the Redux store.
  fetchTodos,
  addTodoAsync,
  deleteTodoAsync,
  updateTodoAsync,
})(App);
//After using connect, the App component will have access to the todos prop, which will be automatically updated whenever the todos state in the Redux store changes. It will also have access to the action creators (fetchTodos, addTodo, deleteTodo) as props, allowing you to dispatch actions to update the state.
