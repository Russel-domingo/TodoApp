import { Task } from "./task.js"

export class Project {
    constructor(projectName, projectDescription) {
        this.id = crypto.randomUUID();
        this.projectName = projectName;
        this.projectDescription = projectDescription
        this.tasks = [];
    }

    addTask(taskName) {
        const task = new Task(taskName)
        this.tasks.push(task);
    }

    deleteTask(taskId){
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    getTask(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }
}
