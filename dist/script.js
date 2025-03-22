"use strict";
const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" }
];
document.addEventListener("DOMContentLoaded", () => {
    const projectsList = document.getElementById("projects-list");
    if (projectsList) {
        projects.forEach(project => {
            const listItem = document.createElement("li");
            listItem.textContent = `${project.name}: ${project.description}`;
            projectsList.appendChild(listItem);
        });
    }
});
