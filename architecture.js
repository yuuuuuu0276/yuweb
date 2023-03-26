
var titlePhoto = document.getElementById("titlephoto");
var header = document.getElementById("header");
var forward = document.getElementById("forwardOverlay");
// var content1 = document.getElementById("content1");
var inter = document.getElementById("interior7");
var wh = window.innerHeight;
var ww = window.innerWidth;

// console.log("windonheight" + wh);

titlePhoto.height = wh + "";
titlePhoto.width = ww + "";

// content1.height = 4 * wh + "";

// inter.marginBottom = wh / 4 + "";


function titlephoto_size(window) {
  var titlePhoto = document.getElementById("titlephoto");
  var wh = window.innerHeight;
  var ww = window.innerWidth;
  titlePhoto.height = wh + "";
  titlePhoto.width = ww + "";
}

function inTop(x, y) {
  return (y < 80)
}

function showHeader(window) {

  // if (inTop(evt.clientX, evt.clientY)) {
  //   header.style.visibility = "visible"
  // }
  console.log(window.screenY)
  if (window.screenY < 100) {
    header.style.visibility = "visible"
    // console.log(evt.clientX, evt.clientY);
    // return (evt.clientX, evt.clientY)
  }
}

function notShowHeader(window) {
  if (window.screenY > 100) {
    header.style.visibility = "hidden"
  }
}

function clear() {
  forward.style.display = "none"
}

function fading() {
  $("#forwardOverlay").fadeOut(1000);
}

function blur() {
  console.log("blur");
  forward.style.display = "inline";
}





window.addEventListener("mousemove", showHeader, false);
window.addEventListener("mousemove", notShowHeader, false);
// window.addEventListener('resize', titlephoto_size, false);

// forward.addEventListener("mousedown", clear);

$("#forwardOverlay").bind("click", fading);
  // forward.addEventListener("click", blur)