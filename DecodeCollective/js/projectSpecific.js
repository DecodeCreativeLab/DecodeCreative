const elements = document.querySelectorAll(".show-on-scroll");
console.log(elements.length);
//------------------------- TRIGGER ANIMATIONS WHEN ELEMENT IS IN VIEWPORT -------------------------//
const numSteps = 20.0;
// Set things up
window.addEventListener("load", (event) => {
    boxElement = document.querySelectorAll(".show-on-scroll");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] != undefined) {
            createObserver(elements[i]);
        }
    }

}, false);


function createObserver(element) {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: buildThresholdList()
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
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
        if (entry.intersectionRatio >= 0.05) {
   
            //entry.target.classList.remove("slide-top");   
           

            if (entry.target.getAttribute('status') == 'slide') {
                entry.target.classList.add("slide-top");
                entry.target.setAttribute('status', 'on');
            }
            else if (entry.target.getAttribute('status') == 'scale-up'){
                entry.target.classList.add("scale-up-center");
                entry.target.setAttribute('status', 'on');
            }
            else if(entry.target.getAttribute('status') == 'fade-in'){
                entry.target.classList.remove("transparent");
                entry.target.classList.add("fade-in");
                entry.target.setAttribute('status', 'on');
            }
            // setTimeout(function(){            

            // }, 200);
        }
        
    });
}