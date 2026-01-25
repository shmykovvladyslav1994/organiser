import type { Task } from "../components/toDoItemContainer/interfaces/task.interface"


const useTasksLocalstorage = () => {
    const LOCAL_STORAGE_TASKS_KEY = 'tasks'
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)
    const setTasksToLocalStorage = (tasks: Task[]) => {
        localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks))
    }
    return { setTasksToLocalStorage, storedTasks: storedTasks ? JSON.parse(storedTasks) as Task[] : [] }
}

export default useTasksLocalstorage;