//------------------------- WAIT TO LOAD THE WHOLE PAGE -------------------------//
// let loader = document.getElementById('loader');
// window.addEventListener("load", function (event) {
//     loader.classList.remove('loading');
//     loader.classList.add('loaded');
//     document.body.classList.add('imgloaded');
// });


//------------------------- TRIGGER ANIMATIONS WHEN ELEMENT IS IN VIEWPORT -------------------------//
let boxElement = document.querySelector(".show-on-scroll");

const numSteps = 20.0;
// Set things up
window.addEventListener("load", (event) => {
    boxElement = document.querySelector(".show-on-scroll");
    if (boxElement != undefined) {
        createObserver();
    }

}, false);


function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(boxElement);
}

function buildThresholdList() {
    let thresholds = [];
    let numSteps = 20;

    for (let i = 1.0; i <= numSteps; i++) {
        let ratio = i / numSteps;
        thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
}

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= 1) {
            entry.target.classList.toggle("is-visible");
        }
    });
}
//--------------------------------------------------------------------------------------------------//

const scrollArrow = document.querySelector(".scroll-arrow");
const smallArrows = document.querySelectorAll(".arrow");
scrollArrow.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    for (let i = 0; i < smallArrows.length; i++) {
        smallArrows[i].classList.toggle("bounceAlpha");
    }
});


