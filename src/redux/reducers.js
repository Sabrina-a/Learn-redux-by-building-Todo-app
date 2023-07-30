import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  FETCH_TODOS_SUCCESS,
} from "./actions";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action?.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action?.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;

// reducers ==>users

//reducers ==> settings

////////////////

// const rootReducer = combineReducers({
//     todos: todoReducer,
//     users: userReducer,
//     settings: settingsReducer,
//   });

//   export default rootReducer;
