import React from 'react';

const Banner = () => {
  return (
    <div className='min-h-screen w-full'>
      <div className='flex lg:flex-row md:flex-col-reverse'>
        <div className='bg-primary h-screen  flex items-center'>
          <div className='w-1/2 mx-auto'>
            <h1 className='text-3xl font-bold text-base-100'>Taste the most </h1>
            <h1 className='text-3xl font-bold text-base-100 my-2'>
              delicious burger in
            </h1>
            <h1 className='text-3xl font-bold text-base-100'>Los Angeles, CA</h1>
            <p className='py-6 text-lg text-base-100'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum. Order online
            </p>
            <div className='flex gap-6'>
              <button className='btn bg-base-100 text-lg rounded-3xl'>
                Online order
              </button>
              <button className='btn btn-primary text-lg text-base-100 border-indigo-100 rounded-3xl'>
                Reservate
              </button>
            </div>
          </div>
        </div>
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325552/cta-restaurante-x-template_beznou.jpg'
          alt='cta-resturante'
          className='h-screen'
        />
      </div>
    </div>
  );
};

export default Banner;
