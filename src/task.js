export class Task {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.completed = false;
    }

    toggleComplete() {
        this.completed = !this.completed;
    }
}