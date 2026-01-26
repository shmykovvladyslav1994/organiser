import { Route, Routes } from "react-router-dom"
import Header from "./components/header/header"
import Tasks from "./components/tasks-module/tasks"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Главная</h1>} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

    </>
  )
}

export default App
