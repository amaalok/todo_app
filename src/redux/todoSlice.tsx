import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "todo1", completed: false },
    { id: 2, name: "todo2", completed: true },
    { id: 3, name: "todo3", completed: true },
  ],
  reducers: {
    addTodo: (state: any, action: any) => {
      const newTodo = {
        id: new Date().getTime(),
        name: action.payload.todo,
        status: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
    updateTodoStatus: (state: any, action: any) => {
      const index = state.findIndex(
        (todo: any) => todo.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
  },
});
export const { addTodo, deleteTodo, updateTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
