const darkModeBtn = document.getElementById('darkModeBtn');

let lightMode = false;

darkModeBtn.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  lightMode = !lightMode;

  if(lightMode){
    darkModeBtn.innerHTML = '☀️';
  } else {
    darkModeBtn.innerHTML = '🌙';
  }

});
