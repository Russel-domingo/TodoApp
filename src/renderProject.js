import "./styles/renderProjectStyle.css";
import { addTask } from "./addTaskModal.js";
import { renderTask } from "./renderTask.js";
import { generalProject } from "./generalProject.js";

export let currentProject = generalProject;

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

        // if (project === generalProject) {
        //     projectDiv.classList.add("general-project");

        // }

        const projectName = document.createElement("h3");
        projectName.textContent = project.projectName;

        projectName.onclick = () => {
            currentProject = project;
            renderTask(project);
        };


        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.projectDescription;

        const addTaskBtn = document.createElement("button");
        addTaskBtn.textContent = "Add Task";
        addTaskBtn.className = "addTask-btn";

        addTaskBtn.addEventListener("click", () => {
            const targetProject = currentProject || generalProject;
            addTask(targetProject);
        });

        projectDiv.append(projectName, projectDescription, addTaskBtn);

        if (project !== generalProject){
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";
            
            deleteBtn.addEventListener("click", () => {
                if (currentProject == project) {
                    currentProject = null;
                    renderTask(null);
                }
                projects.splice(index, 1);
                renderProject(projects);
            });
            projectDiv.appendChild(deleteBtn);
        };

        
        container.appendChild(projectDiv);
    });
}