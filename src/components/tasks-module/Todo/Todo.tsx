import { useContext, type Context } from "react"
import SearchTaskForm from "../searchTaskForm/SearchTaskForm"
import TodoInfo from "../toDoInfo/TodoInfo"
import TodoList from "../toDoItemContainer/TodoList"
import Button from "../../button/Button"
import AddTaskForm from "../../AddTaskForm/AddTaskForm"
import { TaskContext, type TaskContextType } from "../contexts/tasks-contexts/TaskContext"

const Todo = () => {
    const { firstIncompleteTaskRef } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo />
            <Button
                onClick={() => {
                    firstIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                type={'button'}
                children={'Show first incomplete task'}
            />
            <TodoList />
        </div>
    )
}
export default Todo