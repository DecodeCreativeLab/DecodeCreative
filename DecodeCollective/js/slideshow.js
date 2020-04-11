// $("#slideshow > div:gt(0)").hide();

// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);

// const slideshowList = document.getElementById("slideshow");
//  slideshowRotation();

// // function slideshowRotation(){
// //     for(let i=0; i<slideshowList.length; i++){
// //         slideshowList[i].classList.remove("hidden");
// //         setTimeout(function(){
// //              slideshowList[i].classList.add("hidden");
            
// //         }, 3000);
// //     }
// // }

// function slideshowRotation(){
//     setInterval(function(){
//         let childNum=slideshowList.firstChild;
//         childNum.fadeOut(1000);
//         childNum.nextSibling.fadeIn(1000);
//         slideshowList.removeChild(slideshowList.firstChild);
//         slideshowList.appendChild(childNum);        

//     },3000);

// }