// Animation Text + Ship
const text = document.getElementById("text");
const ship = document.getElementById("ship");

window.addEventListener("scroll", function () {
  const valueText = window.scrollY;

//Fix Text Stop Text scroll over page 1000px
  if (valueText > 1000) {
    text.style.marginTop = valueText * 1.0 + "px";
  } else {
    text.style.marginTop = valueText * 1.5 + "px";
  }
  // ship.style.left = value * 0.5 + "px";
});

//Fix Ship Stop Text scroll over page 1000px
window.addEventListener("scroll", function () {
  const valueShip = window.scrollY;

  if (valueShip < 900) {
    ship.style.left = valueShip * 0.35 + "px";
  } else {
    ship.style.left = valueShip;
  }
});
// Animation Text + Ship End

//Animation Wave
const wave1 = document.getElementById("wave1");
const wave2 = document.getElementById("wave2");
const wave3 = document.getElementById("wave3");
const wave4 = document.getElementById("wave4");

window.addEventListener("scroll", function () {
  const value = window.scrollY;

  wave1.style.backgroundPositionX = 300 + value + "px";
  wave2.style.backgroundPositionX = 200 + value + "px";
  wave3.style.backgroundPositionX = 100 + value + "px";
  wave4.style.backgroundPositionX = 400 + value + "px";
});
// Animation Wave End
