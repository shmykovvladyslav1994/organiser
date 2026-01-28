import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import taskAPI from "../../../../../api/tasks-api"
import type { Task } from "../../interfaces/task.interface"

const TaskDetails = () => {
    const { id } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)
    const [task, setTask] = useState<Task | null>(null)

    useEffect(() => {
        id && taskAPI.getById(id).then(
            (task) => {
                setTask(task)
            }
        ).catch(
            () => setHasError(true)
        ).finally(
            () => setIsLoading(false)
        )
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (hasError) {
        return <div>Something went wrong!</div>
    }

    return (
        <>
            <h1>{task?.title}</h1>
            <p>task {task?.isDone ? '' : 'un'}complete</p>
        </>
    )
}

export default TaskDetails