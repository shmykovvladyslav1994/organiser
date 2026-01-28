import { createSlice } from "@reduxjs/toolkit";
import type { Task } from "../../components/tasks-module/toDoItemContainer/interfaces/task.interface";
import taskAPI from "../../api/tasks-api";

interface ITasksState {
    tasks: Task[]
}

const initialState: ITasksState = {
    tasks: []
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        initializeTasksState: () => {
            taskAPI.getAll().then((tasks) => tasks)
        }
    }
})

export const { initializeTasksState } = tasksSlice.actions
export default tasksSlice.reducer