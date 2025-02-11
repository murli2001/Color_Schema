const bg = document.querySelector('body');
const buttons = document.querySelectorAll('.boxes');
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    const key = e.target;
    console.log(key);
    const cases = key.classList;
    console.log(cases);
    let color;    
    if (key.classList.contains('box1')) {
      color = window.getComputedStyle(key).backgroundColor;
      bg.style.backgroundColor = color;
    }
    if (key.classList.contains('box2')) {
      color = window.getComputedStyle(key).backgroundColor;
      bg.style.backgroundColor = color;
    }
    if (key.classList.contains('box3')) {
      color = window.getComputedStyle(key).backgroundColor;
      bg.style.backgroundColor = color;
    }
    if (key.classList.contains('box4')) {
      color = window.getComputedStyle(key).backgroundColor;
      bg.style.backgroundColor = color;
    }
  });
});
