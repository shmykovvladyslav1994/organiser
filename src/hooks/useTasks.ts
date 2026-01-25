import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Task, TaskRequestBody } from "../components/toDoItemContainer/interfaces/task.interface"
import useTasksLocalstorage from "./useTasksLocalstorage"
import taskAPI from "../api/tasks-api"


const useTasks = () => {
    // const { setTasksToLocalStorage, storedTasks } = useTasksLocalstorage()
    const inputRef = useRef<HTMLInputElement>(null)


    const [newTaskTitle, setNewTaskTitle] = useState('')

    const [tasks, setTasks] = useState<Task[]>([])

    const [searchQuery, setSearchQuery] = useState('')

    // useEffect(() => {
    //     setTasksToLocalStorage(tasks)
    // }, [tasks])

    useEffect(() => {
        inputRef.current?.focus()
        taskAPI.getAll()
            .then((data) => {
                setTasks(data)
            })
    }, [])




    const filteredTasks = useMemo(() => {
        const clearSearchQuerry: string = searchQuery.trim().toLowerCase()
        return clearSearchQuerry.length > 0
            ? tasks.filter((task) => task.title.toLowerCase().includes(clearSearchQuerry))
            : null
    }, [searchQuery, tasks])

    const deleteAllTasks = useCallback(() => {
        const confirmed = confirm('Are you sure you want to delete all tasks?')
        if (confirmed) {
            taskAPI.deleteAll(tasks).then((ok) => {
                ok && setTasks([])
            })
        }
    }, [tasks])

    const deleteTask = useCallback((taskId: string) => {
        taskAPI.delete(taskId).then((response) => {
            if (response) {
                setTasks(
                    prevTasks => prevTasks.filter((item) => item.id !== taskId)
                )
            }
        })
    }, [])

    const toggleTaskComplete = useCallback((taskId: string, isDone: boolean) => {
        taskAPI.toggle(taskId, isDone)
            .then((response) => {
                if (response) {
                    setTasks(
                        prevTasks => prevTasks.map((item) => {
                            if (item.id === taskId) {
                                return { ...item, isDone }
                            }
                            return item
                        })
                    )
                }
            })
    }, [])

    const addTask = useCallback((clearedTitle: string) => {
        if (clearedTitle) {
            taskAPI.add(clearedTitle)
                .then((responseJson) => {

                    setTasks((prevTasks) => {

                        return [...prevTasks, new Task(responseJson, clearedTitle)]
                    })
                    setNewTaskTitle('')
                    setSearchQuery('')
                    inputRef.current?.focus()
                })
        }
    }, [])

    return {
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
    }
}
export default useTasks