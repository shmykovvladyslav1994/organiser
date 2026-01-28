import { memo, type Context, useContext } from "react";
import { TaskContext, type TaskContextType } from "../../contexts/tasks-contexts/TaskContext";
import { NavLink } from "react-router-dom";

const TodoItem = ({
    className,
    id,
    isDone,
    title,

}: {
    id: string;
    isDone: boolean;
    title: string;
    className: string;
}) => {
    const {
        deleteTask,
        toggleTaskComplete,
        firstIncompleteTaskId,
        firstIncompleteTaskRef,
    } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)


    return (

        <li className={className + " todo-item"} ref={id === firstIncompleteTaskId ? firstIncompleteTaskRef : null}>
            <input
                className="todo-item__checkbox"
                id={id}
                type="checkbox"
                checked={isDone}
                onChange={(e) => toggleTaskComplete(id, e.target.checked)}

            />
            <NavLink to={`/tasks/${id}`}>
                <label
                    className="todo-item__label"
                    htmlFor={id}
                >
                    {title}
                </label>
            </NavLink>
            <button
                className="todo-item__delete-button"
                aria-label="Delete"
                title="Delete"
                onClick={() => deleteTask(id)}

            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 5L5 15M5 5L15 15"
                        stroke="#757575"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

        </li >

    )
}

export default memo(TodoItem)