import React from 'react';

const values = [
  {
    id: 1,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-01-restaurante-x-template_pbs0ow.svg',
    name: 'Love & Passion',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 2,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-02-restaurante-x-template_hkfbpf.svg',
    name: 'Flavour',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 3,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-03-restaurante-x-template_yr0cl1.svg',
    name: 'Care & craft',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 4,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-04-restaurante-x-template_nwouhc.svg',
    name: 'Customer-first',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 5,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-05-restaurante-x-template_pkdvww.svg',
    name: 'Teamwork',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    id: 6,
    logo: 'https://res.cloudinary.com/dzowf0ojq/image/upload/v1677425402/about-value-06-restaurante-x-template_ry2zsu.svg',
    name: 'Quality',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const AboutValue = () => {
  return (
    <div className='mt-28 mb-12 mx-48'>
      <h2 className='text-4xl font-bold text-center w-1/2 mx-auto'>
        The value that drive everything we do
      </h2>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-y-6 gap-x-6 mt-8'>
        {values.map((value) => (
          <div key={value.id} className='card bg-base-100'>
            <figure className='pt-6'>
              <img src={value.logo} alt='logo' className='rounded-3xl' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title font-bold text-2xl'>{value.name}</h2>
              <p className='text-md'>{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutValue;
