import React from 'react';

const History = () => {
  return (
    <div className='flex flex-row h-[920px] relative my-32'>
      <div className='w-3/5 px-32 pt-6 mb-4'>
        <h1 className='text-5xl pl-6 font-bold'>
          Our story started back in 1984.
        </h1>
        <p className='text-lg pl-6 py-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero ex
          quasi harum. Est cupiditate doloribus repellendus suscipit iste vero
          numquam quas corrupti libero, dolores architecto! Fugit officiis totam
          vero est!
        </p>
      </div>
      <div className='relative z-20 w-2/5 pl-4'>
        <img
          className='rounded-3xl w-4/5'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338465/Instagram-01-restaurante-x-template_oz97wm.jpg'
          alt='burger'
        />
      </div>
      <div className='absolute bottom-12  left-0 w-3/4 h-3/5 bg-primary z-10'></div>
      <div className='absolute top-64 left-36 z-20'>
        <img
          className='rounded-3xl h-2/5 w-1/2'
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677405315/about-02-restaurante-x-template_ubey1h.jpg'
          alt='burger'
        />
      </div>
      <div className='absolute z-20 bottom-0 bg-base-100 ml-52 py-16 px-12 flex flex-row gap-10 rounded-2xl border-solid border-2 border-neutral-600'>
        <span className='text-lg'>As seen on: </span>
        <span>
          <img
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-doorash-restaurante-x-template_ulmgg9.svg'
            alt='doorash'
          />
        </span>
        <span>
          <img
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-postmates-restaurante-x-template_uezgil.svg'
            alt='postmates'
          />
        </span>
        <span>
          <img
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677402511/logo-uber-eats-restaurante-x-template_yyezgl.svg'
            alt='uber eats'
          />
        </span>
        <span>
          <img
            src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-grubhub-restaurante-x-template_qazdtt.svg'
            alt='grubhub'
          />
        </span>
      </div>
    </div>
  );
};

export default History;
