import React from 'react';

const items = [
  {
    id: 1,
    name: 'John Carter',
    designation: 'Co-founder- and Manager',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425144/avatar-john-carter-restaurante-x-template_yfkoiv.png',
    details:
      'Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue.',
  },
  {
    id: 2,

    name: 'Andy Smith',
    designation: 'Co-founder- and Manager',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425143/avatar-andy-smith-restaurante-x-template_oxtcfp.png',
    details:
      'Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue.',
  },
  {
    id: 3,

    name: 'Sophie Moore',
    designation: 'Head of Staff',
    image:
      'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425145/avatar-sophie-moore-restaurante-x-template_tiaqyw.png',
    details:
      'Lorem ipsum dolor sit amet consect adipiscing elit volutpat eget ultricies ut nascetur auctor mi sollicitudin augue.',
  },
];

const Teams = () => {
  return (
    <div className='mx-32 pt-24'>
      <h1 className='text-3xl font-semibold text-center mb-4'>Meet our team</h1>
      <p className='text-xl text-center w-3/5 mx-auto'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.
      </p>
      <div className='grid lg:grid-cols-3 gap-y-4 gap-x-4 mt-8 px-24'>
        {items.map((item) => (
          <div key={item.id} className='card bg-base-100 relative'>
            <figure className='pt-6'>
              <img src={item.image} alt='team name' className='rounded-3xl' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title font-bold text-2xl'>{item.name}</h2>
              <p className='text-md text-primary'>{item.designation}</p>
              <p className='text-md'>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
