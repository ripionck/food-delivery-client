import React from 'react';

const FoodApp = () => {
  return (
    <div>
      <p className='text-center text-2xl font-bold'>
        Order from your favorite app today!
      </p>
      <div className='flex justify-center gap-12 mt-6'>
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-doorash-restaurante-x-template_ulmgg9.svg'
          alt='doorash'
        />
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-postmates-restaurante-x-template_uezgil.svg'
          alt='postmates'
        />
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-rappi-restaurante-x-template_lumwam.svg'
          alt='rappi'
        />
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677336282/logo-grubhub-restaurante-x-template_qazdtt.svg'
          alt='grubhub'
        />
      </div>
    </div>
  );
};

export default FoodApp;
