const body = document.getElementById("body")
const greeting = document.getElementById("greeting")

const christmasBtn = document.getElementById("christmas")
christmasBtn.addEventListener("click", christmassify)

const snowBtn = document.getElementById("snow")
snowBtn.addEventListener("click", snowify)

function christmassify() {
  body.classList.remove("snow");  
  body.classList.add("christmas");
  greeting.innerHTML = `🎅Merry Christmas!`
}

function snowify() {
  body.classList.remove("christmas");
  body.classList.add("snow");
  greeting.innerHTML = `Let it Snow! ☃️`
}
// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

  
// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.