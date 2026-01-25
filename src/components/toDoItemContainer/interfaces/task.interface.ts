export interface ITaskRequestBody {
    title: string;
    isDone: boolean
}

export class TaskRequestBody implements ITaskRequestBody {
    title: string;
    isDone: boolean = false

    constructor(title: string) {
        this.title = title
    }
}

export class Task extends TaskRequestBody {
    id: string;

    constructor(id: string, title: string) {
        super(title)
        this.id = id
    }

}