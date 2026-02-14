import "./styles/addTaskStyle.css";

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

    const cancelTaskBtn = document.createElement("button");
    cancelTaskBtn.textContent = "Cancel";
    saveTask.addEventListener("click", () => {
        if (!titleInput.value.trim()) {
            return;
        }
        project.addTask(titleInput.value);
        renderTask(project);
        titleInput.value = "";
        taskModal.remove();
        console.log(project.tasks);
    });

    cancelTaskBtn.addEventListener("click", () => {
        taskModal.remove();
    });

    taskModal.addEventListener("click", (e) => {
        if (e.target === taskModal) {
            taskModal.remove();
        }
    });
    taskBox.append(titleInput, saveTask, cancelTaskBtn);
    taskModal.appendChild(taskBox);
    document.body.appendChild(taskModal);
}