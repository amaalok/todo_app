import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state: any, action: any) => {
      const newTodo = {
        id: new Date(),
        name: action.payload.todo,
      };
      state.push(newTodo);
    },
    deleteTodo: (state: any, action: any) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
