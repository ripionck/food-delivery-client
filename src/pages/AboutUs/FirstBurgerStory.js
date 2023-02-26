import React from 'react';

const FirstBurgerStory = () => {
  return (
    <div className='flex lg:flex-row md:flex-col gap-24 px-32'>
      <div className='flex items-center '>
        <div>
          <h1 className='text-5xl font-semibold'>
            The story of our first burger
          </h1>
          <p className='text-lg py-4'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur occaecat cupidatat non ut
            enim ad minim veniam, quis nostrud exercitation sit.
          </p>
          <p className='text-lg '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquaquis
            nostrud exercitation.
          </p>
          <button className='btn btn-primary text-lg text-base-100 rounded-full mt-4'>
            Connect us
          </button>
        </div>
      </div>
      <img
        className='rounded-3xl w-2/5'
        src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677424336/about-04-restaurante-x-template_u2nicg.jpg'
        alt='about'
      />
    </div>
  );
};

export default FirstBurgerStory;
