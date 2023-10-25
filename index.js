const countDisplay = document.querySelector('.count');
const decreaseButton = document.querySelector('#decrease');
const resetButton = document.querySelector('#reset');
const increaseButton = document.querySelector('#increase');

decreaseButton.addEventListener('click', function(){
  let currentValue = countDisplay.textContent;
  currentValue -= 1;
  countDisplay.textContent = currentValue;
});

resetButton.addEventListener('click', function(){
  countDisplay.textContent = '0';
})

increaseButton.addEventListener('click', function(){
  let currentValue = countDisplay.textContent;
  currentValue = parseInt(currentValue) + 1;
  countDisplay.textContent = currentValue;
});