import { useRef } from "react"
import { Task } from "../components/toDoItemContainer/interfaces/task.interface"


const useIncompleteTaskScroll = (tasks: Task[]) => {

    const firstIncompleteTaskId = tasks.find((task) => !task.isDone)?.id || null
    const firstIncompleteTaskRef = useRef<HTMLLIElement | null>(null)

    return {
        firstIncompleteTaskRef,
        firstIncompleteTaskId
    }
}

export default useIncompleteTaskScroll