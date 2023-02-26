import React from 'react';

const HeroSection = () => {
  return (
    <div className='h-screen relative'>
      <img
        src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325761/home-hero-restaurante-x-template_ofg1gk.jpg'
        alt='home hero'
        className='max-w-md absolute lg:block md:hidden top-28 right-64 rounded-2xl'
      />

      <div className='h-screen flex lg:flex-row'>
        <div className='lg:w-3/5 flex items-center justify-center'>
          <div className='lg:w-3/5 md:w-full mx-auto '>
            <h1 className='text-6xl font-bold'>The best place to</h1>
            <h1 className='text-6xl font-bold text-primary py-4'>
              eat burgers in LA.
            </h1>
            <p className='py-6 text-xl'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className='btn btn-primary ml-4 rounded-3xl text-lg text-base-100'>
              Reservate
            </button>
            <button className='btn bg-base-100 border border-neutral-500 ml-4 rounded-3xl text-lg'>
              Order online
            </button>
          </div>
        </div>
        <div className='bg-primary lg:block md:hidden w-2/5 h-4/5 mt-12'></div>
      </div>
    </div>
  );
};

export default HeroSection;
