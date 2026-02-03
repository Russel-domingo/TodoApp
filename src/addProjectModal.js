import "./styles/addProjectModalStyle.css"
import { Project } from "./project.js";

export function addProjectModal (addProject) {
    // Adding Project Modal
    const modal = document.createElement("div");
    modal.className = "modal";

    const box = document.createElement("div");
    box.className = "modal-box";

    const title = document.createElement("h2");
    title.textContent = "Add Project";

    const nameInput = document.createElement("input");
    nameInput.placeholder = "Project name";
    nameInput.id = "nameInput";

    const description = document.createElement("textarea");
    description.placeholder = "Description";

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";

    box.append(title, nameInput, description, saveBtn, cancelBtn);
    modal.appendChild(box);

    document.body.appendChild(modal);
    
    saveBtn.addEventListener("click", () => {
        if (!nameInput.value.trim()) {
            return
        }

        const newProject = new Project(nameInput.value, description.value);
        addProject(newProject);

        nameInput.value = ""; 
        description.value = "";
        closeModal(modal);
    });

    cancelBtn.addEventListener("click", () => {
        closeModal(modal);
    });


    function closeModal(modal) {
        modal.style.display = "none"
    }

    return {
        open () {
            modal.style.display = "flex";
        },
        close () {
            modal.style.display = "none";
        },
        closeModal,
    }
}
