import { TasksProvider } from "./contexts/tasks-contexts/TaskContext"
import Todo from "./Todo/Todo"

const Tasks = () => {
    return (<TasksProvider><Todo /></TasksProvider>)
}
export default Tasks