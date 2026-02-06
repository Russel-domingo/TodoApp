import { renderTask } from "./renderTask.js";
export function addTask (project) {

    const taskModal = document.createElement("div");
    taskModal.className = "taskModal";

    const taskBox = document.createElement("div");
    taskBox.className = "taskBox";

    const titleInput = document.createElement("input");
    titleInput.placeholder = "task name";

    const saveTask = document.createElement("button");
    saveTask.textContent = "add task";

    saveTask.addEventListener("click", () => {
        if (!titleInput.value.trim()) {
            return;
        }
        project.addTask(titleInput.value);
        taskModal.remove();
        console.log(project.tasks);
    });

    taskBox.append(titleInput, saveTask);
    taskModal.appendChild(taskBox);
    document.body.appendChild(taskModal);
}