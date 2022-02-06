import './css/style.css';
import { checkPaymentSystem } from './js/app';

const btn = document.getElementById('submit-button');
const input = document.getElementById('card-number');

btn.addEventListener('click', (event) => {
  const notValid = document.getElementById('not-valid');
  const valid = document.getElementById('valid');
  event.preventDefault();
  if (input.value) {
    Array.from(document.getElementsByClassName('card'))
      .forEach((item) => item.classList.remove('card-disabled'));
    notValid.classList.add('show');
    valid.classList.add('show');
    valid.innerText = 'Valid';
    if (checkPaymentSystem(input.value) === 'nothing') {
      notValid.classList.remove('show');
    } else {
      const card = checkPaymentSystem(input.value);
      valid.classList.remove('show');
      valid.innerText += ` ${input.value} - This is ${card}!`;
      input.value = '';
      Array.from(document.getElementsByClassName('card')).filter((item) => !item.classList.contains(card))
        .forEach((item) => item.classList.add('card-disabled'));
    }
  }
});
