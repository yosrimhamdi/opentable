import { PRICE } from '@prisma/client';

export default [
  {
    id: 1,
    label: '$',
    price: PRICE.CHEAP,
  },
  {
    id: 2,
    label: '$$',
    price: PRICE.REGULAR,
  },
  {
    id: 3,
    label: '$$$',
    price: PRICE.EXPENSIVE,
  },
];
