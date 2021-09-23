// const currentel = document.querySelector("#current-project");
// const divider = document.querySelector("#divider");
// const scrollbutton = document.querySelector(".scroll-arrow");
// const footer = document.querySelector(".footer");
// const prjctbtns = document.querySelectorAll('.project-button');
// const scrolltxt = document.querySelector('#scroll-text');

//scrollbutton.addEventListener('click', scrollToNextElement);
//footer.addEventListener('click', scrollToNextElement);

const navBarIcon = document.querySelector('.icon');
navBarIcon.addEventListener('click', handleNavBar);

const popup = document.querySelector('.popup');
const popupX = document.querySelector(".x-btn");
popupX.addEventListener('click', () => { 
    popup.classList.add('hidden') 
    popup.classList.remove('popup-open') 
});



function handleNavBar() {
    var x = document.querySelector(".menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}

function scrollToNextElement() {
    let currentIndex = currentel.innerText;

    if (currentIndex < prjctbtns.length) {
        prjctbtns[currentIndex].scrollIntoView();
        if (currentIndex == prjctbtns.length - 1) {
            scrollbutton.style.transform = 'rotate(270deg)';
            scrolltxt.innerText = "Back To Top";
        }
    }
    else {
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
// const numSteps = 20.0;
// // Set things up
// window.addEventListener("load", (event) => {
//     boxElement = document.querySelectorAll(".show-on-scroll");
//     for (let i = 0; i < boxElement.length; i++) {
//         if (boxElement[i] != undefined) {
//             createObserver(boxElement[i]);
//         }
//     }

// }, false);


// function createObserver(element) {
//     let observer;

//     let options = {
//         root: null,
//         rootMargin: "0px",
//         threshold: buildThresholdList()
//     };

//     observer = new IntersectionObserver(handleIntersect, options);
//     observer.observe(element);
// }

// function buildThresholdList() {
//     let thresholds = [];
//     let numSteps = 20;

//     for (let i = 1.0; i <= numSteps; i++) {
//         let ratio = i / numSteps;
//         thresholds.push(ratio);
//     }

//     thresholds.push(0);
//     return thresholds;
// }

// function handleIntersect(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.intersectionRatio >= 1) {
//             currentel.innerText = entry.target.getAttribute('index');
//             if (currentel.innerText == prjctbtns.length) {
//                 scrollbutton.style.transform = 'rotate(270deg)';
//                 scrolltxt.innerText = "Back To Top";
//             }
//             else {
//                 scrollbutton.style.transform = 'rotate(90deg)';
//                 scrolltxt.innerText = "Scroll";

//             }
//             // entry.target.classList.remove("slide-top");   

//             divider.classList.remove("divider");
//             setTimeout(function () {
//                 // entry.target.classList.add("slide-top");   

//                 divider.classList.add("divider");
//             }, 200);
//         }
//     });
// }



//------------------------- GRID MOUSEOVER EFFECT -------------------------//
const gridItems = [...document.querySelector('.grid').querySelectorAll('picture')];
const polygon = document.querySelector('#polygon')
const scrollParent = document.querySelector(".scroll-container")
let currentElement;
let screenSize = true;
gridItemSetup();
detectScroll(scrollParent);
detectHover();

function gridItemSetup() {
    for (let item of gridItems) {
        item.addEventListener('mouseenter', () => { hoverEffect(item) })
        item.addEventListener('click', openPopup)
        item.nextElementSibling.addEventListener('click', openPopup)
    }

    polygon.classList.add('hovered-project')
    polygon.addEventListener('mouseover', hoverEffectTitle)
    polygon.addEventListener('mouseout', hoverEffectClose)
    polygon.addEventListener('click', openPopup)
}

function hoverEffect(el) {
    if (!el) return
    currentElement = el;
    gridItems.map(x => x.nextElementSibling.style.opacity = 0);
    polygon.style.width = el.lastElementChild.clientWidth.toString() + 'px';
    polygon.style.height = el.lastElementChild.clientHeight.toString() + 'px';
    const position = getPos(el)
    polygon.style.top = position.y - scrollParent.scrollTop + "px";    
    polygon.style.left = position.x + "px";
    el.nextElementSibling.style.opacity = 1
    polygon.firstElementChild.style.backgroundColor = getRandomColor()
    polygon.style.opacity = (screenSize) ? 1 : 0
}

function hoverEffectTitle() {
    if (!currentElement || !screenSize) return
    currentElement.nextElementSibling.style.opacity = 1
}

function hoverEffectClose() {
    if (!currentElement || !screenSize) return
    currentElement.nextElementSibling.style.opacity = 0    
}

function getPos(el) {
    for (var lx = 0, ly = 0;
        el != null;
        lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return { x: lx, y: ly };
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

window.onresize = () => {
    hoverEffect(currentElement)
    detectScroll(scrollParent)
    detectHover()
}



function openPopup() {
    popup.classList.remove('hidden')
    // popup.classList.add('popup-open')
    // popup.focus()
    const descs = [...document.querySelectorAll('.project-popup')];
    descs.map(x => x.classList.add("hidden"))

    // popup.querySelector('.popup-title').innerText = currentElement.nextElementSibling.innerText;
    popup.querySelector(`#${currentElement.nextElementSibling.id}-desc`).classList.remove('hidden')
    popup.querySelector(".popup-background").style.backgroundColor = polygon.firstElementChild.style.backgroundColor;
}

function detectScroll(div) {
    // if (div.scrollHeight > div.clientHeight) div.style.alignItems = "flex-start";
    // else div.style.alignItems = "center"
}

function detectHover() {
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
        gridItems.map(x => x.nextElementSibling.style.opacity = 1);
        screenSize = false
    }
    else screenSize = true
}