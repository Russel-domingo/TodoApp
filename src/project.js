
export class Project {
    constructor(projectName, projectDescription) {
        this.id = crypto.randomUUID();
        this.projectName = projectName;
        this.projectDescription = projectDescription
        this.tasks = [];
    }

    addTask(taskName) {
        this.tasks.push(taskName);
    }

    deleteTask(index){
        this.tasks.splice(index, 1);
    }
}
