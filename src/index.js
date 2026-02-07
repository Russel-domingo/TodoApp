import "./styles/styles.css";
import { addProjectModal } from "./addProjectModal.js";
import { currentProject, renderProject } from "./renderProject.js";
import { generalProject } from "./generalProject.js";
import { renderTask } from "./renderTask.js";
const projects = [generalProject];

const modal = addProjectModal((project) => {
    projects.push(project);
    renderProject(projects);

    // renderTask(project);
});

const addProjectBtn = document.createElement("button");
addProjectBtn.textContent = "Add Project";
addProjectBtn.className = "add-project-btn"

addProjectBtn.addEventListener("click", () =>{
    modal.open();
});

document.body.appendChild(addProjectBtn);

renderProject(projects);
renderTask(generalProject);