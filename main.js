const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

console.log(`O numero gerado foi ${randomNumber}`);

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keypress', keypressEnter);

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if (
    Number(inputNumber.value) !== randomNumber &&
    inputNumber.value >= 0 &&
    inputNumber.value <= 10 &&
    inputNumber.value !== ''
  ) {
    const dismiss = document.getElementById('toast-danger');
    document.querySelector('.error').classList.remove('hidden');
    dismiss.classList.remove('opacity-0');
    dismiss.classList.remove('hidden');
  } else if (Number(inputNumber.value) === randomNumber) {
    toggleScreen();

    screen2.querySelector(
      'h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`;
  } else {
    alert('O número tem que ser de 0 a 10');
  }

  inputNumber.value = '';
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
  console.log(`O numero gerado foi ${randomNumber}`);
}

function toggleScreen() {
  screen1.classList.toggle('hidden');
  screen2.classList.toggle('hidden');
}

function keypressEnter(e) {
  if (e.key === 'Enter' && screen1.classList.contains('hidden')) {
    handleResetClick();
  }
}
