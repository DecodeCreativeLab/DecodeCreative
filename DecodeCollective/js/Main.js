//------------------------- WAIT TO LOAD THE WHOLE PAGE -------------------------//
// let loader = document.getElementById('loader');
// window.addEventListener("load", function (event) {
//     loader.classList.remove('loading');
//     loader.classList.add('loaded');
//     document.body.classList.add('imgloaded');
// });

const prjctbtns =document.querySelectorAll('.scroll-item');
let currentel ="";
const scrolltxt = document.querySelector('#scroll-text');
const scrollbutton = document.querySelector(".scroll-arrow");
const footer = document.querySelector(".footer");




//------------------------- TRIGGER ANIMATIONS WHEN ELEMENT IS IN VIEWPORT -------------------------//
const numSteps = 20.0;
// Set things up
window.addEventListener("load", (event) => {
    boxElement = document.querySelectorAll(".scroll-item");
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
                if (entry.intersectionRatio >= 0.9) {           
            
            currentel =  entry.target.getAttribute('index');  
            if(currentel == prjctbtns.length){
                scrollbutton.style.transform = 'rotate(270deg)';
                scrolltxt.innerText = "Back To Top";
            }
            else{
                scrollbutton.style.transform = 'rotate(90deg)';
                scrolltxt.innerText = "Scroll";
        
            }
                       
        }
    });
}
//--------------------------------------------------------------------------------------------------//


//--------------------------------------- SCROLL TO NEXT SECTION ----------------------------------------//
scrollbutton.addEventListener('click', scrollToNextElement);
footer.addEventListener('click', scrollToNextElement);

function scrollToNextElement(){
    let currentIndex = currentel;
    
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

//--------------------------------------------------------------------------------------------------//


