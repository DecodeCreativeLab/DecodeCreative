//------------------------- BUTTON LISTENERS -------------------------//
const bioAnna = document.querySelector("#bioAnna");
const bioChristos = document.querySelector("#bioChristos");
const bioAnnaText = document.querySelector("#bioAnnaText");
const bioChristosText = document.querySelector("#bioChristosText");



bioAnna.addEventListener("click", function() {
    bioAnnaText.classList.toggle("hidden");
    bioChristosText.classList.add("hidden");
});
bioChristos.addEventListener("click", function() {
    bioChristosText.classList.toggle("hidden");
    bioAnnaText.classList.add("hidden");
});