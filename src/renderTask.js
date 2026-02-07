
export function renderTask (project) {
    let taskContainer = document.getElementById("taskContainer");
    
    if(!taskContainer) {
        const container = document.createElement("div");
        container.id = "taskContainer";
        document.body.appendChild(container);
    }

    if (!project) {
        container.innerHTML = "<p>Select a project to see tasks</p>"
        return;
    }
    const container = document.getElementById("taskContainer");
    container.innerHTML = "";

    project.tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const title = document.createElement("span");
        title.textContent = task.title;

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = task.completed;

        checkBox.addEventListener("change", () => {
            task.toggleComplete();
            taskDiv.classList.toggle("done", task.completed);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";

        deleteBtn.addEventListener("click", () => {
            project.deleteTask(task.id);
            renderTask(project);
        });

        taskDiv.append(checkBox, title, deleteBtn);

        if (task.completed) taskDiv.classList.add("done");
        
        container.appendChild(taskDiv);
    });
}
