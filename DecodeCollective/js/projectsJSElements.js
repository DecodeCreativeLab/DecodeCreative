const currentel = document.querySelector("#current-project");
const divider = document.querySelector("#divider");
const scrollbutton = document.querySelector(".scroll-arrow");
const footer = document.querySelector(".footer");
const prjctbtns =document.querySelectorAll('.project-button');
const scrolltxt = document.querySelector('#scroll-text');


scrollbutton.addEventListener('click', scrollToNextElement);
footer.addEventListener('click', scrollToNextElement);



function scrollToNextElement(){
    let currentIndex = currentel.innerText;
    
    if(currentIndex<prjctbtns.length){
        prjctbtns[currentIndex].scrollIntoView();
        if(currentIndex==prjctbtns.length-1){
            scrollbutton.style.transform = 'rotate(270deg)';
            scrolltxt.innerText = "Back To Top";
        }
    }
    else{
        prjctbtns[0].scrollIntoView();
        scrollbutton.style.transform = 'rotate(90deg)';
        scrolltxt.innerText = "Scroll";


    }
    
}

//------------------------- WAIT TO LOAD THE WHOLE PAGE -------------------------//
// let loader = document.getElementById('loader');
// window.addEventListener("load", function (event) {
//     loader.classList.remove('loading');
//     loader.classList.add('loaded');
//     document.body.classList.add('imgloaded');
// });

//------------------------- TRIGGER ANIMATIONS WHEN ELEMENT IS IN VIEWPORT -------------------------//
const numSteps = 20.0;
// Set things up
window.addEventListener("load", (event) => {
    boxElement = document.querySelectorAll(".show-on-scroll");
    for (let i = 0; i < boxElement.length; i++) {
        if (boxElement[i] != undefined) {            
            createObserver(boxElement[i]);
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
        if (entry.intersectionRatio >= 1) {             
            currentel.innerText =  entry.target.getAttribute('index');  
            if(currentel.innerText == prjctbtns.length){
                scrollbutton.style.transform = 'rotate(270deg)';
                scrolltxt.innerText = "Back To Top";
            }
            else{
                scrollbutton.style.transform = 'rotate(90deg)';
                scrolltxt.innerText = "Scroll";
        
            }
            // entry.target.classList.remove("slide-top");   
            
            divider.classList.remove("divider");   
            setTimeout(function(){ 
                // entry.target.classList.add("slide-top");   
               
                divider.classList.add("divider");   
            }, 200);
        }
    });
}