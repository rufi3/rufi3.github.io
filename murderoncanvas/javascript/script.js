let vh = window.innerHeight * 0.1

document.documentElement.style.setProperty('--vh', `${vh}px`);

function topNavToggle() {
  var a = document.getElementById("topnav");
  if (a.className === "navbar") {
    a.className += " responsive";
    document.getElementById("bars").style.display = "none";
    document.getElementById("close").style.display = "block";
  } else {
    a.className = "navbar";
    document.getElementById("bars").style.display = "block";
    document.getElementById("close").style.display = "none";
  }
}
