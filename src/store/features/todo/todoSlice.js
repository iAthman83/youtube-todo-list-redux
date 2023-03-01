import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), title: "Wake up" },
    { id: nanoid(), title: "Drink coffee" },
    { id: nanoid(), title: "Play tennis" },
  ],
  toggleForm: true,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.toggleForm = !state.toggleForm;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { toggleForm } = todoSlice.actions;

export default todoSlice.reducer;
