const body = document.body;
const toggleBtn = document.getElementById('toggle');

toggleBtn.onclick = function(){
  toggleBtn.classList.toggle('active');
  body.classList.toggle('active');
}

toggleBtn.addEventListener("click", function() {
  let lightStyle = document.getElementById("light-style");
  let darkStyle = document.getElementById("dark-style");
  let mode = document.getElementById("mode");
  
  if (darkStyle.disabled) {
    lightStyle.disabled = true;
    darkStyle.disabled = false;
    mode.textContent = "Dark";
  } else {
    lightStyle.disabled = false;
    darkStyle.disabled = true;
    mode.textContent = "Light";
  }
});

// Change icon
const themeButton = document.getElementById('theme-button');
let isDarkMode = false;

themeButton.addEventListener('click', () => {
  if (isDarkMode) {
    themeButton.classList.remove('fa-toggle-on');
    themeButton.classList.add('fa-toggle-off');
    isDarkMode = false;
  } else {
    themeButton.classList.remove('fa-toggle-off');
    themeButton.classList.add('fa-toggle-on');
    isDarkMode = true;
  }
});
// Change icon End
