document.addEventListener("DOMContentLoaded", function () {
    var projectList = document.getElementById("project-list");
    if (!projectList) {
        console.error("Element with ID 'project-list' not found.");
        return;
    }
    var projects = [
        { title: "Project Four Thousand", tech: "C, golang, Python", description: "A cool project." },
        { title: "Project Two", tech: "Golang", description: "A cool project, but again." },
    ];
    projects.forEach(function (project) {
        var pCard = document.createElement("article");
        pCard.classList.add("card");
        // Background Image
        var tempText = document.createElement("div");
        tempText.classList.add("temporary_text");
        tempText.textContent = "Place image here";
        // Card content section
        var cardContent = document.createElement("div");
        cardContent.classList.add("card_content");
        // Title
        var cardTitle = document.createElement("span");
        cardTitle.classList.add("card_title");
        cardTitle.textContent = project.title;
        // Subtitle (using tech stack)
        var subtitle = document.createElement("span");
        subtitle.classList.add("card_subtitle");
        subtitle.textContent = project.tech; // Tech stack
        // Description
        var description = document.createElement("p");
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
document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    document.body.style.background = "radial-gradient(circle at ".concat(x, "px ").concat(y, "px, var(--penguini_purple), var(--penguini_black))");
});
