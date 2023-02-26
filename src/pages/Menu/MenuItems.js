import React from 'react';

const items = [
  {
    id: 1,
    price: 19.99,
    name: 'Classic Burger',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325552/classic-burger-restaurante-x-template-p-500_ijoucf.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 2,
    price: 17.99,
    name: 'Choclate Milkshake',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325551/chocolate-milkshake-restaurante-x-template-p-500_lhd3os.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 3,
    price: 13.99,
    name: 'Classic Fries',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325551/classic-fries-restaurante-x-template-p-500_jf4hjj.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 4,
    price: 18.99,
    name: 'Pancakes',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325552/pancakes-restaurante-x-template-p-500_aeu8qw.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 5,
    price: 5.99,
    name: 'Ice Cream',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677326697/ice-cream-restaurante-x-template-p-500_ourgs9.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 6,
    price: 20.99,
    name: 'Chicken Burger',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325551/chicken-burger-restaurante-x-template-p-500_cane3m.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 7,
    price: 10.99,
    name: 'Egg toast',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325552/egg-toast-restaurante-x-template-p-500_c6sykk.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
  {
    id: 8,
    price: 12.99,
    name: 'Regular Soda',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325552/regular-soda-restaurante-x-template-p-500_lpnisg.jpg',
    details: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit',
  },
];

const MenuItems = () => {
  return (
    <div className='mx-32'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-y-6 gap-x-4 mt-8'>
        {items.map((item) => (
          <div key={item.id} className='card bg-base-100 relative'>
            <figure className='pt-6'>
              <img src={item.image} alt='menu items' className='rounded-xl' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title font-bold text-2xl'>{item.name}</h2>
              <p className='text-md'>{item.details}</p>
            </div>
            <div className='bg-base-100 absolute px-4 py-2 top-8 right-4 text-black text-xl rounded-3xl'>
              ${item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
