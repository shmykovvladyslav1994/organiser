import { useContext, type Context } from "react"
import Field from "../../Field/Field"
import { TaskContext, type TaskContextType } from "../contexts/tasks-contexts/TaskContext"

const SearchTaskForm = () => {
    const {
        searchQuery,
        setSearchQuery,
    } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)
    return (
        <form className="todo__form" onSubmit={(e) => e.preventDefault()}>
            <Field
                className="todo__field"
                label="Search task"
                id="search-task"
                type="search"
                value={searchQuery}
                onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
            />
        </form>
    )
}

export default SearchTaskForm