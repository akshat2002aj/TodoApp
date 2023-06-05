import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todo: [
    {
      name: 'User Research & Analysis',
      completed: true,
    },
    {
      name: 'Black & White Wireframe',
      completed: true,
    },
    {
      name: 'Design On Figma',
      completed: false,
    },
  ],
  loading: false,
  error: false,
};

// const addTodo = (data) => (dispatch) => {
//   console.log(data);
//   dispatch(TodoSlice.actions.addTodoSuccess(data));
// };

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodoRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    addTodoSuccess: (state, action) => {
      todo: state.todo.push(action.payload);
      loading: false;
      error: false;
    },
    addTodoFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    deleteAllTodoRequest: (state) => {
      return {
        ...state,
        loading: true,
      };
    },
    deleteAllTodoSuccess: (state, action) => {
      return {
        ...state,
        todo: [],
        loading: false,
      };
    },
    deleteAllTodoFailure: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
    handleCompleted: (state, action) => {
      loading: false;
      todo: state.todo[action.payload].completed =
        !state.todo[action.payload].completed;
    },
  },
});

export default TodoSlice;

// export { addTodo };
