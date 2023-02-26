import React from 'react';

const FollowUs = () => {
  return (
    <div className=''>
      <div className='flex justify-between pt-36 px-20'>
        <h1 className='text-4xl font-bold'>Follow us on Instagram</h1>
        <button className='btn btn-primary rounded-full text-lg'>
          Follow us
        </button>
      </div>
      <div className='grid lg:grid-cols-3  gap-8 mt-12 pb-28 px-36'>
        <div>
          <img
            className='rounded-full'
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-01-restaurante-x-template_oz97wm.jpg'
            alt='burger'
          />
        </div>
        <div>
          <img
            className='rounded-3xl'
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-02-restaurante-x-template_o4ft5x.jpg'
            alt='fries'
          />
        </div>
        <div className='grid grid-cols-2 gap-x-4'>
          <div>
            <img
              className='rounded-3xl'
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338466/Instagram-03-restaurante-x-template-p-500_d2rghs.jpg'
              alt='drink'
            />
            <img
              className='rounded-3xl mt-4'
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-04-restaurante-x-template-p-500_ggvgvj.jpg'
              alt='chose fries'
            />
          </div>
          <div>
            <img
              className='rounded-3xl'
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-05-restaurante-x-template-p-500_mfrbsw.jpg'
              alt='coca cola'
            />
            <img
              className='rounded-3xl mt-4'
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-06-restaurante-x-template-p-500_iy5kgg.jpg'
              alt='role'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;
