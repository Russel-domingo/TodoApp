import "./styles/styles.css";
import { addProjectModal } from "./addProjectModal.js";
import { renderProject } from "./renderProject.js";
const projects = [];

const modal = addProjectModal((project) => {
    projects.push(project);
    renderProject(projects);
});

const addProjectBtn = document.createElement("button");
addProjectBtn.textContent = "Add Project";
addProjectBtn.className = "add-project-btn"

addProjectBtn.addEventListener("click", () =>{
    modal.open();
});

document.body.appendChild(addProjectBtn);