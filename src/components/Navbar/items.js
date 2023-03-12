import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Contacts page',
    link: '/contacts',
  },
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
  },
];

export default items;
