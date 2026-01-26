import { createBrowserRouter, } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <div>Home</div> },
    { path: "/tasks", element: import("./components/tasks-module/tasks").then(({ default: Tasks }) => <Tasks />) },
]);

export default router;