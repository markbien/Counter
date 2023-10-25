const countDisplay = document.querySelector('.count');
const decreaseButton = document.querySelector('#decrease');
const resetButton = document.querySelector('#reset');
const increaseButton = document.querySelector('#increase');

function changeCountDisplayColor(){
  const currentValue = parseInt(countDisplay.textContent);
  const currentColor = countDisplay.style.color;
  if (currentValue < 0 && currentColor != 'Red') {
    countDisplay.style.color = 'Red';
  } else if(currentValue == 0 && currentColor != 'Black') {
    countDisplay.style.color = 'Black';
  } else {
    countDisplay.style.color = "Green";
  }
}

decreaseButton.addEventListener('click', function(){
  let currentValue = countDisplay.textContent;
  currentValue -= 1;
  countDisplay.textContent = currentValue;
  changeCountDisplayColor();
});

resetButton.addEventListener('click', function(){
  countDisplay.textContent = '0';
  changeCountDisplayColor();
})

increaseButton.addEventListener('click', function(){
  let currentValue = countDisplay.textContent;
  currentValue = parseInt(currentValue) + 1;
  countDisplay.textContent = currentValue;
  changeCountDisplayColor();
});