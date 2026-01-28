import { Route, Routes } from "react-router-dom"
import Header from "./components/header/header"
import TaskDetails from "./components/tasks-module/toDoItemContainer/toDoItem/task-details/task-details"
import React from "react"

const LazyTasks = React.lazy(() => import('./components/tasks-module/tasks'))

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/tasks" element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <LazyTasks />
          </React.Suspense>
        } />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Routes>

    </>
  )
}

export default App
