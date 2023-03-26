var header = document.getElementById("header");


function inTop(x, y) {
  return (y < 80)
}

function showHeader(evt) {
  if (inTop(evt.clientX, evt.clientY)) {
    header.style.visibility = "visible"
  }
  // console.log(evt.clientX, evt.clientY);
  return (evt.clientX, evt.clientY)
}

function notShowHeader(evt) {
  if (evt.clientY > 80) {
    header.style.visibility = "hidden"
  }
}


document.addEventListener("mousemove", showHeader, false);
document.addEventListener("mousemove", notShowHeader, false);

// document.getElementById("title").addEventListener()