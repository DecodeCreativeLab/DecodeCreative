//------------------------- WAIT TO LOAD THE WHOLE PAGE -------------------------//
// let loader = document.getElementById('loader');
// window.addEventListener("load", function (event) {
//     loader.classList.remove('loading');
//     loader.classList.add('loaded');
//     document.body.classList.add('imgloaded');
// });

//const prjctbtns = document.querySelectorAll('.scroll-item');
//console.log(prjctbtns.length);
//let currentel = "1";
//const scrolltxt = document.querySelector('#scroll-text');
// const scrollbutton = document.querySelector(".scroll-arrow");
// const footer = document.querySelector(".footer");


//------------------------- TRIGGER ANIMATIONS WHEN ELEMENT IS IN VIEWPORT -------------------------//
//const numSteps = 20.0;
// Set things up
// window.addEventListener("load", (event) => {

//     for (let i = 0; i < prjctbtns.length; i++) {
//         if (prjctbtns[i] != undefined) {
//             createObserver(prjctbtns[i]);
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
//         if (entry.intersectionRatio >= 0.9) {

//             currentel = entry.target.getAttribute('index');
//             if (currentel == prjctbtns.length) {
//                 scrollbutton.style.transform = 'rotate(270deg)';
//                 scrolltxt.innerText = "Back To Top";
//             }
//             else {
//                 scrollbutton.style.transform = 'rotate(90deg)';
//                 scrolltxt.innerText = "Scroll";

//             }

//         }
//     });
// }
//--------------------------------------------------------------------------------------------------//


//--------------------------------------- SCROLL TO NEXT SECTION ----------------------------------------//
// scrollbutton.addEventListener('click', scrollToNextElement);
// footer.addEventListener('click', scrollToNextElement);

// function scrollToNextElement() {
//     let currentIndex = currentel;

//     if (currentIndex < prjctbtns.length) {
//         console.log(currentIndex);
//         prjctbtns[currentIndex].scrollIntoView();
//         if (currentIndex == prjctbtns.length - 1) {
//             scrollbutton.style.transform = 'rotate(270deg)';
//             scrolltxt.innerText = "Back To Top";
//         }
//     }
//     else {
//         prjctbtns[0].scrollIntoView();
//         scrollbutton.style.transform = 'rotate(90deg)';
//         scrolltxt.innerText = "Scroll";


//     }

// }

//--------------------------------------------------------------------------------------------------//

//--------------------------------------- IMAGE ANIMATION ----------------------------------------//
(function() {
    // Init
    var container = document.getElementById("container"),
        inner = document.getElementById("inner");
  
    // Mouse
    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function(event) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function() {
        return "(" + this.x + ", " + this.y + ")";
      }
    };
  
    // Track the mouse position relative to the center of the container.
    mouse.setOrigin(container);
  
    //----------------------------------------------------
  
    var counter = 0;
    var refreshRate = 10;
    var isTimeToUpdate = function() {
      return counter++ % refreshRate === 0;
    };
  
    //----------------------------------------------------
  
    var onMouseEnterHandler = function(event) {
      update(event);
    };
  
    var onMouseLeaveHandler = function() {
      inner.style = "";
    };
  
    var onMouseMoveHandler = function(event) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
  
    //----------------------------------------------------
  
    var update = function(event) {
      mouse.updatePosition(event);
      updateTransformStyle(
        (mouse.y / inner.offsetHeight / 2).toFixed(2),
        (mouse.x / inner.offsetWidth / 2).toFixed(2)
      );
    };
  
    var updateTransformStyle = function(x, y) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
      inner.style.webkitTransform = style;
      inner.style.mozTranform = style;
      inner.style.msTransform = style;
      inner.style.oTransform = style;
    };
  
    //--------------------------------------------------------
  
    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  })();