const body = document.getElementById("body")

const greeting = document.getElementById("greeting")

const btn = document.getElementById("btn")
btn.addEventListener("click", christmassify)
//const christmasBtn = document.getElementById("christmas")
//christmasBtn.addEventListener("click", christmassify)

function fix() {
  body.classList.remove('🎃');
  body.classList.add('🎅');
  greeting.innerHTML = `🎅 Merry Christmas`

  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
}

//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.
