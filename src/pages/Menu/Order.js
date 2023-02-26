import React from 'react';

const Order = () => {
  return (
    <>
      <p className='text-center text-4xl font-bold'>Order via App!</p>
      <p className='text-center text-xl w-1/2 mx-auto py-4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim
        officiis vitae id voluptatem aliquam minus eius eaque autem, quidem,
        aperiam quod cupiditate soluta error quam, explicabo voluptates!
        Necessitatibus, consectetur.
      </p>
      <div className='grid grid-cols-4 gap-x-4 gap-y-4 w-1/2 mx-auto py-16 cursor-pointer'>
        <img
          className='border border-neutral-500 px-8 py-8 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-doorash-restaurante-x-template_ulmgg9.svg'
          alt='doorash'
        />
        <img
          className='border border-neutral-500 px-8 py-8 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-postmates-restaurante-x-template_uezgil.svg'
          alt='postmates'
        />
        <img
          className='border border-neutral-500 px-8 py-6 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-rappi-restaurante-x-template_lumwam.svg'
          alt='rappi'
        />
        <img
          className='border border-neutral-500 px-8 py-8 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-grubhub-restaurante-x-template_qazdtt.svg'
          alt='grubhub'
        />
        <img
          className='border border-neutral-500 px-8 py-8 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677402511/logo-uber-eats-restaurante-x-template_yyezgl.svg'
          alt='uber eats'
        />
        <img
          className='border border-neutral-500 px-4 py-4 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677402511/logo-seamless-restaurante-x-template_sqo6ou.svg'
          alt='seamless'
        />
        <img
          className='border border-neutral-500 px-6 py-4 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677402511/logo-gopuff-restaurante-x-template_kbxjff.svg'
          alt='gopuff'
        />
        <img
          className='border border-neutral-500 px-6 py-6 rounded-2xl'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677402510/logo-didifood-restaurante-x-template_wnzoj5.svg'
          alt='didfood'
        />
      </div>
    </>
  );
};

export default Order;
