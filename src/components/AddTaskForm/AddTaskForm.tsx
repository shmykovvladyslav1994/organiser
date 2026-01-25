import { useContext, useState, type Context } from 'react'
import { TaskContext, type TaskContextType } from '../../contexts/tasks-contexts/TaskContext'
import Button from '../button/Button'
import Field from '../Field/Field'

const AddTaskForm = () => {
    const {
        addTask,
        newTaskTitle,
        setNewTaskTitle,
        inputRef,
    } = useContext<TaskContextType>(TaskContext as Context<TaskContextType>)

    const [inputError, setInputError] = useState<string | null>(null);

    const clearedTitle = newTaskTitle.trim();
    const isValidTitle = clearedTitle.length;

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        addTask(clearedTitle)
    }

    const onInput = (e: React.FormEvent) => {
        const value = (e.target as HTMLInputElement).value;
        const clearedValue = value.trim()
        setNewTaskTitle(value)

        setInputError(!value || clearedValue ? null : 'Task title cannot be empty');
    }

    return (
        <form className="todo__form" onSubmit={onSubmit}>
            <Field
                error={inputError}
                inputRef={inputRef}
                className="todo__field"
                label="New task title"
                id="new-task"
                type="text"
                value={newTaskTitle}
                onInput={onInput} />

            <Button children="Add" type="submit" disabled={!isValidTitle}></Button>
        </form>
    )
}

export default AddTaskForm