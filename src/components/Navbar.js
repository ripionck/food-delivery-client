import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
  return (
    <div className='drawer drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* <!-- Navbar --> */}
        <div className='w-full navbar z-30 px-16 mt-6'>
          <div className='flex-1 px-2 mx-2'>
            <img
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-restaurante-x-template_dovlrz.svg'
              alt='Logo'
            />
          </div>
          <div className='flex-none hidden lg:block'>
            <ul className='menu menu-horizontal'>
              {/* Navbar content */}
              <li>
                <Link href='/' className='text-xl'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/menu' className='text-xl'>
                  Menu
                </Link>
              </li>
              <li>
                <Link className=' text-xl'>Reservations</Link>
              </li>
              <li>
                <Link href='/aboutus' className=' text-xl'>
                  About Us
                </Link>
              </li>
              <li>
                <Link className=' text-xl'>Contact Us</Link>
              </li>
              <li>
                <Link className='text-xl'>Online Order</Link>
              </li>
              <li className='dropdown dropdown-hover  dropdown-end'>
                <label tabIndex='0' className='text-xl'>
                  Events
                </label>
                <ul
                  tabIndex='0'
                  className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
                >
                  <li>
                    <Link>Book Now</Link>
                  </li>
                  <li>
                    <Link>Pre Book</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='flex-none lg:hidden'>
            <label for='my-drawer-3' className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className='drawer-side'>
        <label for='my-drawer-3' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 bg-base-100'>
          {/* Sidebar content here */}
          <li>
            <Link className=' text-xl'>Home</Link>
          </li>
          <li>
            <Link className=' text-xl'>Reservations</Link>
          </li>
          <li>
            <Link className='text-xl'>About Us</Link>
          </li>
          <li>
            <Link className=' text-xl'>Contact Us</Link>
          </li>
          <div
            tabIndex='0'
            className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
          >
            <div className='collapse-title text-xl font-medium'>Menu</div>
            <div className='collapse-content'>
              <ul className='p-2'>
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
                <li>
                  <Link>Submenu 3</Link>
                </li>
                <li>
                  <Link>Submenu 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
