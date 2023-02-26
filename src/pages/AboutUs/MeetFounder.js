import React from 'react';

const MeetFounder = () => {
  return (
    <div className='flex lg:flex-row md:flex-col gap-24 px-32'>
      <img
        className='rounded-3xl w-2/5'
        src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677424335/about-03-restaurante-x-template_ruwalm.jpg'
        alt='about'
      />

      <div className='flex items-center '>
        <div>
          <h1 className='text-5xl font-semibold'>How our founder met</h1>
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
    </div>
  );
};

export default MeetFounder;
