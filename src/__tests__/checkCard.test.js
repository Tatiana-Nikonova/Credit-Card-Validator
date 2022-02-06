import { checkCard } from '../js/app';

test.each([
  ['5521752050466486', true],
  ['5521752602940301', true],
  ['5368290055961892', true],
  ['6368290055961892', false],
  ['6368290055', false],
  ['63682900559618927895475', false],
])(('Проверка функции checkCard'), (value, exp) => {
  expect(checkCard(value)).toBe(exp);
});
