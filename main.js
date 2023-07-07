const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
console.log(`O numero gerado foi ${randomNumber}`);

function handleClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector('#inputNumber');

  if (Number(inputNumber.value) !== randomNumber) {
    const dismiss = document.getElementById('toast-danger');
    document.querySelector('.error').classList.remove('hidden');
    dismiss.classList.remove('opacity-0');
    dismiss.classList.remove('hidden');
  } else if (Number(inputNumber.value) === randomNumber) {
    document.querySelector('.screen1').classList.add('hidden');
    document.querySelector('.screen2').classList.remove('hidden');

    document.querySelector(
      '.screen2 h2'
    ).innerText = `Acertou em ${xAttempts} tentativas!`;
  }
  xAttempts++;
}
