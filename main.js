const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');
  // console.log(inputNumber.value);

  xAttempts++;
}
