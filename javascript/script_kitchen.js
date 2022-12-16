let vh = window.innerHeight * 0.1

document.documentElement.style.setProperty('--vh', `${vh}px`);

function closeMessage() {
   document.getElementById('message_container').style.display = "none";
}

function showFridge() {
   document.getElementById('fridge_container').style.display = "block";
}

function closeFridge() {
   document.getElementById('fridge_container').style.display = "none";
}

function showBottle() {
   document.getElementById('bottle_container').style.display = "block";
}

function closeBottle() {
   document.getElementById('bottle_container').style.display = "none";
}

function showCocktail() {
   document.getElementById('cocktail_container').style.display = "block";
}

function closeCocktail() {
   document.getElementById('cocktail_container').style.display = "none";
}

function showAshtray() {
   document.getElementById('ashtray_container').style.display = "block";
}

function closeAshtray() {
   document.getElementById('ashtray_container').style.display = "none";
}

function showDoor() {
   document.getElementById('door_container').style.display = "block";
}

function closeDoor() {
   document.getElementById('door_container').style.display = "none";
}

function showTape() {
   document.getElementById('tape_container').style.display = "block";
}

function closeTape() {
   document.getElementById('tape_container').style.display = "none";
}
