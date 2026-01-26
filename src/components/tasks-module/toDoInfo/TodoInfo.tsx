import { memo, useContext, useMemo, type Context } from "react"
import { TaskContext, type TaskContextType } from "../contexts/tasks-contexts/TaskContext"

const TodoInfo = () => {

    const {
        tasks,
        deleteAllTasks,
    } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)

    const done = useMemo(() => tasks.filter((item) => item.isDone).length, [tasks])
    const total = tasks.length
    const hasTasks = total > 0
    return (
        <div className="todo__info">
            <div className="todo__total-tasks">
                Done {done} from {total}
            </div>
            {hasTasks && (
                <button className="todo__delete-all-button" type="button" onClick={deleteAllTasks}>Delete all</button>
            )}
        </div>
    )
}

export default memo(TodoInfo)