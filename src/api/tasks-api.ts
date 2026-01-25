import { TaskRequestBody, type Task } from "../components/toDoItemContainer/interfaces/task.interface"

const URL = 'http://localhost:4000/tasks/'
const headers = {
    'Content-Type': 'application/json'
}

const taskAPI = {

    getAll: async (): Promise<Task[]> => {
        const response = await fetch(URL, { method: 'GET', headers })
        return await response.json()
    },
    deleteAll: (tasks: Task[]): Promise<boolean> => {
        return Promise.all(tasks.map(task => {
            return taskAPI.delete(task.id)
        })).then((response) => {
            return response.every(Boolean)
        })
    },
    delete: (taskId: string): Promise<boolean> => {
        return fetch(`${URL}${taskId}`, {
            method: 'DELETE'
        }).then((response) => response.ok)
    },
    toggle: (taskId: string, isDone: boolean): Promise<boolean> => {
        return fetch(`${URL}${taskId}`, {
            method: 'PATCH',
            body: JSON.stringify({ isDone })
        }).then((response) => response.ok)
    },
    add: (clearedTitle: string): Promise<string> => {
        return fetch(URL, {
            method: 'POST',
            body: JSON.stringify(new TaskRequestBody(clearedTitle))
        }).then((response) => {
            return response.json()
        }).then((responseJson) => {
            return responseJson.id
        })
    },


}

export default taskAPI