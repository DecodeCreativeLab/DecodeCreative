const nav=document.querySelector(".navParent");
const navTopSstart=nav.offsetTop;
const navTopFixed=20;
var y=0;

function setFixed(){
  y=window.scrollY;

  if(y>=navTopSstart-navTopFixed){
    nav.className="fixed-nav";
    }
    else {
    nav.className="navParent";
  }
}

setInterval(setFixed, 5);
