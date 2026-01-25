import Todo from './components/Todo/Todo'
import { TasksProvider } from './contexts/tasks-contexts/TaskContext'

const App = () => {
  return (
    <TasksProvider>
      <Todo />
    </TasksProvider>
  )
}

export default App
