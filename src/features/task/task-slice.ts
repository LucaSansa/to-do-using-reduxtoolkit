import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  taskName: string;
  done: boolean;
}

interface TaskList {
  taskList: Task[];
}

const initialState: TaskList = {
  taskList: [],
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Task>) => {
      state.taskList.push(action.payload);
    },
    changeStatus: (state, action) => {
      const index = state.taskList.findIndex(
        (item) => item.id === action.payload.id
      );

      state.taskList[index].done = action.payload.status;
    },
    deleteTask: (state, action) => {
      state.taskList.splice(
        state.taskList.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
  },
});

export const { increment, changeStatus, deleteTask } = taskListSlice.actions;
export const taskListReducer = taskListSlice.reducer;
