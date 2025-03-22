document.addEventListener("DOMContentLoaded", () => {
    const projectList = document.getElementById("project-list");

    if (!projectList) {
        console.error("Element with ID 'project-list' not found.");
        return;
    }

    const projects = [
        {title: "Project Four Thousand", tech: "C, golang, Python", description: "A cool project."},
        {title: "Project Two", tech: "Golang", description: "A cool project, but again."},

    ];

    projects.forEach(project => {
        const pCard = document.createElement("article");
        pCard.classList.add("card");

        // Background Image
        const tempText = document.createElement("div");
        tempText.classList.add("temporary_text");
        tempText.textContent = "Place image here";

        // Card content section
        const cardContent = document.createElement("div");
        cardContent.classList.add("card_content");

        // Title
        const cardTitle = document.createElement("span");
        cardTitle.classList.add("card_title");
        cardTitle.textContent = project.title;

        // Subtitle (using tech stack)
        const subtitle = document.createElement("span");
        subtitle.classList.add("card_subtitle");
        subtitle.textContent = project.tech;  // Tech stack

        // Description
        const description = document.createElement("p");
        description.classList.add("card_description");
        description.textContent = project.description;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(subtitle);
        cardContent.appendChild(description);

        pCard.appendChild(tempText);
        pCard.appendChild(cardContent);

        projectList.appendChild(pCard); // Append the new card to the project list
    });
});

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    document.body.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--penguini_purple), var(--penguini_black))`;
});