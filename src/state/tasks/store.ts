import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks-slice"

export const store = configureStore({
    reducer: {
        tasksReduser: tasksReducer
    }
})

export type rootTasksState = ReturnType<typeof store.getState>;
export type appTasksDispatch = typeof store.dispatch;