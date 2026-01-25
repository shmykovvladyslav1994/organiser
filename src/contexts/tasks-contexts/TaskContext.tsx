import { createContext, type ReactNode } from "react";

import useTasks from "../../hooks/useTasks";
import useIncompleteTaskScroll from "../../hooks/useIncompliteTaskScroll";

export const TaskContext = createContext<TaskContextType | null>(null)

export const TasksProvider = ({ children }: { children: ReactNode }) => {

    const {
        tasks,
        deleteTask,
        toggleTaskComplete,
        deleteAllTasks,
        filteredTasks,
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        inputRef,
        searchQuery,
        setSearchQuery
    } = useTasks();

    const {
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    } = useIncompleteTaskScroll(tasks)

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                toggleTaskComplete,
                deleteAllTasks,
                filteredTasks,
                firstIncompleteTaskRef,
                firstIncompleteTaskId,
                addTask,
                newTaskTitle,
                setNewTaskTitle,
                inputRef,
                searchQuery,
                setSearchQuery
            }}>
            {children}
        </TaskContext.Provider>)
}

export type TaskContextType = {
    tasks: Array<{
        id: string,
        title: string,
        isDone: boolean
    }>,
    deleteAllTasks: () => void;
    deleteTask: (taskId: string) => void;
    toggleTaskComplete: (taskId: string, isDone: boolean) => void;
    filteredTasks: Array<{
        id: string,
        title: string,
        isDone: boolean
    }> | null;
    firstIncompleteTaskRef: React.RefObject<HTMLLIElement | null>;
    firstIncompleteTaskId: string | null;
    addTask: (clearedTitle: string) => void;
    newTaskTitle: string;
    setNewTaskTitle: (title: string) => void;
    inputRef: React.RefObject<HTMLInputElement | null>;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}