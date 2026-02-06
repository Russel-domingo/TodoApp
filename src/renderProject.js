import { addTask } from "./addTaskModal.js";
import { renderTask } from "./renderTask.js";

export let currentProject = null;

export function renderProject(projects) {

    let projectContainer = document.getElementById("projectContainer");
    
    if (!projectContainer) {
        const container = document.createElement("div");
        container.id = "projectContainer";
        document.body.appendChild(container);
    }

    const container = document.getElementById("projectContainer");
    container.innerHTML = "";

    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.className = "project";

        const projectName = document.createElement("h3");
        projectName.textContent = project.projectName;

        projectName.onclick = () => {
            currentProject = project;
            renderTask(project);
        };

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.projectDescription;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.className = "addTask-btn";

        addTaskBtn.addEventListener("click", () => {
            addTask(project);
        });

        deleteBtn.addEventListener("click", () => {
            if (currentProject == project) {
                currentProject = null;
                renderTask(null);
            }
            projects.splice(index, 1);
            renderProject(projects);
        })

        projectDiv.append(projectName, projectDescription, deleteBtn,addTaskBtn);
        container.appendChild(projectDiv);
    });
}