import React from 'react';

const Articles = () => {
  return (
    <div className='bg-base-200 py-32'>
      <div className='flex justify-between px-32'>
        <h1 className='text-3xl font-bold'>Our Articles</h1>
        <p className='px-4 py-2 bg-base-100 rounded-3xl'>Browse our articles</p>
      </div>
      <div className='hero min-h-screen w-full'>
        <div className='hero-content grid lg:grid-cols-2 gap-12 px-24'>
          <div className='bg-info rounded-2xl'>
            <img
              src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677338590/blog-post-featured-image-01-restaurante-x-template_e4vmnp.jpg'
              className='rounded-t-2xl'
              alt='blog post'
            />
            <div className='pl-8'>
              <p className='py-4'>September 1, 2022</p>
              <h1 className='text-3xl font-bold'>
                The secret trick to prepare a perfect burger
              </h1>
              <p className='pt-4 pb-10'>
                Lorem ipsum dolor sit amet consectetur adipiscing elitilmim
                semper adipisc
              </p>
            </div>
          </div>
          <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-x-6 gap-y-6'>
            <div className='bg-info rounded-2xl'>
              <img
                className='rounded-t-2xl w-full'
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677432362/blog-post-featured-image-03-restaurante-x-template-p-500_c5fowf.jpg'
                alt='blog post'
              />
              <p className='py-3 pl-6'>September 1, 2022</p>
              <p className='pb-4 pl-6 text-lg font-bold'>
                The secret trick to prepare a perfect burger
              </p>
            </div>
            <div className='bg-info rounded-2xl'>
              <img
                className='rounded-t-2xl w-full'
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677346205/blog-post-featured-image-04-restaurante-x-template-p-500_ru0pvq.jpg'
                alt='blog post'
              />
              <p className='py-3 pl-6'>September 1, 2022</p>
              <p className='pb-4 pl-6 text-lg font-bold'>
                The secret trick to prepare a perfect burger
              </p>
            </div>
            <div className='bg-info rounded-2xl '>
              <img
                className='rounded-t-2xl w-full '
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677346205/blog-post-featured-image-05-restaurante-x-template-p-500_n7jhqn.jpg'
                alt='blog post'
              />
              <p className='py-3 pl-6'>September 1, 2022</p>
              <p className='pb-4 pl-6 text-lg font-bold'>
                The secret trick to prepare a perfect burger
              </p>
            </div>
            <div className='bg-info rounded-2xl '>
              <img
                className='rounded-t-2xl w-full '
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677346206/blog-post-featured-image-06-restaurante-x-template-p-500_anbcg6.jpg'
                alt='blog post'
              />
              <p className='py-3 pl-6'>September 1, 2022</p>
              <p className='pb-4 pl-6 text-lg font-bold'>
                The secret trick to prepare a perfect burger
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
