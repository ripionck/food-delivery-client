import React from 'react';
import MenuItems from './MenuItems';
import Order from './Order';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <h1 className='text-center text-5xl font-font mt-32'>Our menu</h1>
      <p className='text-center text-xl py-4'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
        vitae velit bibendum elementum dolor.
      </p>
      <ul className='flex justify-center gap-6 mt-4'>
        <li>
          <Link className='text-xl'>All</Link>
        </li>
        <li>
          <Link className='text-xl'>Breakfasts</Link>
        </li>
        <li>
          <Link className=' text-xl'>Main Dishes</Link>
        </li>
        <li>
          <Link className=' text-xl'>Drinks</Link>
        </li>
        <li>
          <Link className=' text-xl'>Desserts</Link>
        </li>
      </ul>
      <MenuItems />
      <Order />
    </>
  );
};

export default Menu;
