let vh = window.innerHeight * 0.1

document.documentElement.style.setProperty('--vh', `${vh}px`);

function topNavToggle() {
  var x = document.getElementById("topnav");
  var y = document.getElementById("tophead");
  if (x.className === "navbar" && y.className === "header") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "navbar";
    y.className = "header";
  }
}
