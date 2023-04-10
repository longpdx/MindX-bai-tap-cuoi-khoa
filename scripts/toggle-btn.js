const body = document.body;

const toggleBtn = document.getElementById('toggle');
toggleBtn.onclick = function(){
  toggleBtn.classList.toggle('active');
  body.classList.toggle('active');
}

// Change Parallax background color
const parallaxElement = document.querySelector('.parallax');
const parallaxTextElement = document.querySelector('.parallax #text');
const waveElement = document.querySelector('.wave-animation');
// const vowelsElement = document.querySelector('.vowels');
// const consonantsElement = document.querySelector('.consonants');
let isColored = false;
let originalColor;

toggleBtn.addEventListener('click', () => {
if (isColored) {
  parallaxElement.style.background = originalColor;
  parallaxTextElement.style.color = originalColor;
  waveElement.style.background = originalColor;
  // vowelsElement.style.background = originalColor;
  // consonantsElement.style.background = originalColor;

  isColored = false;
} else {
  originalColor = parallaxElement.style.background;
  originalColor = parallaxTextElement.style.color;
  originalColor = waveElement.style.background;
  // originalColor = vowelsElement.style.background;
  // originalColor = consonantsElement.style.background;

  parallaxElement.style.background = '#2b1055'; // Thay đổi màu sắc thành màu đỏ
  parallaxTextElement.style.color = 'white'; // Thay đổi màu sắc thành màu đỏ
  waveElement.style.background = 'black'; // Thay đổi màu sắc thành màu đỏ
  // vowelsElement.style.background = '#2b1055'; // Thay đổi màu sắc thành màu đỏ
  // consonantsElement.style.background = '#2b1055'; // Thay đổi màu sắc thành màu đỏ
  isColored = true;
}
});
// Change Parallax background color End

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

