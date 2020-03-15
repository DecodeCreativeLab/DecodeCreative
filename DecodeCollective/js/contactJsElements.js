//------------------------- BUTTON LISTENERS -------------------------//
const bioAnna = document.querySelector("#bioAnna");
const bioChristos = document.querySelector("#bioChristos");
const bioAnnaText = document.querySelector("#bioAnnaText");
const bioChristosText = document.querySelector("#bioChristosText");



bioAnna.addEventListener("click", function() {
    bioAnnaText.classList.toggle("hidden");
});