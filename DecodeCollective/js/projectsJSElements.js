//------------------------- BUTTON LISTENERS -------------------------//
const projectMenuBtn = document.querySelector(".project-menu-toggle");
const projectsOverlay = document.getElementById("projects-overlay");

projectMenuBtn.addEventListener("click", function() {
    projectMenuBtn.classList.toggle("project-menu-select");
});