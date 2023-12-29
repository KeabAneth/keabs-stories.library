let x = true;
function cool() {
  if (x == true) {
  document.getElementById("aa").className = "foot2";
document.getElementById("cc").className = "hide";
document.getElementById("dd").className = "show";
 x = false; 
  }
  else {
document.getElementById("aa").className = "foot";
  document.getElementById("cc").className = "show";
document.getElementById("dd").className = "hide";
    x = true;
}
}
