import protect from '@/controllers/middlewares/protected';

export const getUser = (_, __, ctx) => {
  const user = protect(ctx.req);
  return {
    id: 1,
    name: 'Bamidele Daniel',
    username: 'humanityjs',
    age: 25,
    address: '1, Random Address, Lagos'
  };
};

export const getUsers = () => [
  {
    id: 1,
    name: 'Bamidele Daniel',
    username: 'humanityjs',
    age: 25,
    address: '1, Lagos road, Lagos.'
  },
  {
    id: 2,
    name: 'Helen Johnson',
    username: 'bekind',
    age: 70,
    address: '25, Ahmadu Bello way, Lagos.'
  }
];
