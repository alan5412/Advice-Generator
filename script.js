const adviceNumber = document.querySelector('.adivice-number');
const adviceText = document.querySelector('.text-advice');
const diceButton = document.querySelector('.button');

async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    adviceNumber.textContent = `#${data.slip.id}`;
    adviceText.textContent = data.slip.advice;
}

getAdvice();

diceButton.addEventListener('click', getAdvice);