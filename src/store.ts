import { configureStore } from "@reduxjs/toolkit";
import { taskListReducer } from "./features/task/task-slice";

export const store = configureStore({
  reducer: {
    taskList: taskListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
