export function checkCard(cardNumber) {
  let result = 0;
  if (cardNumber.length < 12 || cardNumber.length > 20) {
    return false;
  }
  for (let i = 0; i < cardNumber.length; i += 1) {
    let digit = Number(cardNumber[i]);
    if (i % 2 === 0) digit *= 2;
    if (digit > 9) result += digit - 9;
    else result += digit;
  }
  return result % 10 === 0;
}

export function checkPaymentSystem(cardNumber) {
  if (checkCard(cardNumber)) {
    if (cardNumber[0] === '2') return 'world';
    if (cardNumber[0] === '4') return 'visa';
    if (cardNumber[0] === '5') return 'mastercard';
    if (cardNumber[0] === '3') return 'american-express';
    if (cardNumber[0] === '6') return 'discover';
  }
  return 'nothing';
}
