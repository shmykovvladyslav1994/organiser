import { memo, useContext, type Context } from "react";
import TodoItem from "./toDoItem/TodoItem"
import { TaskContext, type TaskContextType } from "../contexts/tasks-contexts/TaskContext";

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
    } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)
    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks && filteredTasks.length === 0

    if (hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Zadach ne naydeno</div>
    }
    if (!hasTasks) {
        return <div className="todo__empty-message">Zadach net</div>
    }

    return (
        <ul className="todo__list">
            {(filteredTasks ?? tasks).map((task) => (
                <TodoItem
                    id={task.id}
                    isDone={task.isDone}
                    title={task.title}
                    className="todo__item"
                    key={task.id}


                />
            ))}
        </ul>
    )
}

export default memo(TodoList)   