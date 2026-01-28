import { Provider } from "react-redux"
import { TasksProvider } from "./contexts/tasks-contexts/TaskContext"
import Todo from "./Todo/Todo"
import { store } from "../../state/tasks/store"

const Tasks = () => {
    return (
        <Provider store={store} >
            <TasksProvider>
                <Todo />
            </TasksProvider>
        </Provider>
    )
}
export default Tasks
