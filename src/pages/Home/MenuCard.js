import React from 'react';

const menus = [
  {
    id: 1,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325869/menu-breakfasts-restaurante-x-template_tuxb8g.svg',
    name: 'Breakfast',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    id: 2,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325963/menu-main-dishes-restaurante-x-template_htwe6s.svg',
    name: 'Main Dishes',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    id: 3,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325963/menu-drinks-restaurante-x-template_xydp2v.svg',
    name: 'Drinks',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
  {
    id: 4,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325963/menu-desserts-restaurante-x-template_a4lqo4.svg',
    name: 'Desserts',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam',
  },
];

const MenuCard = () => {
  return (
    <div className='px-16'>
      <h2 className='text-3xl font-bold text-center mt-28 mb-12'>
        Browse our menu
      </h2>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-24'>
        {menus.map((menu) => (
          <div
            key={menu.id}
            className='card bg-base-100 border border-neutral-500 shadow-xl'
          >
            <figure className='px-10 pt-10'>
              <img src={menu.logo} alt='Shoes' className='rounded-xl' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title text-2xl font-bold'>{menu.name}</h2>
              <p className='text-lg'>{menu.description}</p>
              <p className='text-primary text-lg mt-4'>Explore menu</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-5 pb-32 mt-12'>
        <button className='btn btn-primary rounded-3xl text-base-100 text-lg'>
          Online Order
        </button>
        <button className='btn bg-base-100 border border-accent rounded-3xl text-lg'>
          Book a table
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
