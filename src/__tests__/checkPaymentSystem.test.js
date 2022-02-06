import { checkPaymentSystem } from '../js/app';

test.each([
  ['5521752050466486', 'mastercard'],
  ['5521752602940301', 'mastercard'],
  ['5368290055961892', 'mastercard'],
  ['6368290055961892', 'nothing'],
  ['4058703123404149', 'visa'],
  ['2258703123404141', 'world'],
  ['6368290055', 'nothing'],
  ['63682900559618927895475', 'nothing'],
  ['3058703123404547', 'american-express'],
  ['6258703123404647', 'discover'],
])(('Проверка функции checkPaymentSystem'), (value, exp) => {
  expect(checkPaymentSystem(value)).toBe(exp);
});
