import protect from '@/controllers/middlewares/protected';

export const getUser = async (_, __, ctx) => {
  // const user = protect(ctx.req);
  const { db } = ctx;
  const docs = await db.collection('users').get();
  docs.forEach((d) => {
    console.log(d.data());
  });
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
