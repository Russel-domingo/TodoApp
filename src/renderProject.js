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

        const projectDescription = document.createElement("p");
        projectDescription.textContent = project.projectDescription;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", () => {
            projects.splice(index, 1);
            renderProject(projects);
        })

        projectDiv.append(projectName, projectDescription, deleteBtn);
        container.appendChild(projectDiv);
    });
}