import React from 'react';

const Review = () => {
  return (
    <div className=' relative px-16 py-16'>
      <p className='text-center mt-6 '>1</p>
      <h1 className='text-center text-4xl font-bold'>What our clients say</h1>
      <p className='text-center mt-4'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam
        vitae velit bibendum elementum.
      </p>
      <div className='flex justify-center gap-3 '>
        <div className='card w-2/5   bg-base-100 shadow-2xl pl-12 py-4 pr-6 mt-6'>
          <div className='card-body'>
            <div>
              <div className='rating'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  checked
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
              </div>
            </div>
            <h2 className='card-title'>“You must try these burgers”</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper
              adipiscing massa gravida nisi cras enim quis nibholm varius amet
              gravida ut facilisis neque egestas
            </p>
            <div className='flex flex-row gap-4 mt-2'>
              <img
                className='h-16 w-16 rounded-full'
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677330610/face1_wkqg0x.jpg'
                alt='face'
              />
              <div>
                <p>Matt Cannon</p>
                <p>San Diego, CA</p>
              </div>
            </div>
          </div>
        </div>
        <div className='card w-2/5  bg-base-100 shadow-2xl pl-12 py-4 pr-6 mt-6'>
          <div className='card-body'>
            <div>
              <div className='rating'>
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                  checked
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
                <input
                  type='radio'
                  name='rating-2'
                  className='mask mask-star-2 bg-orange-400'
                />
              </div>
            </div>
            <h2 className='card-title'>“You must try these burgers”</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper
              adipiscing massa gravida nisi cras enim quis nibholm varius amet
              gravida ut facilisis neque egestas
            </p>
            <div className='flex flex-row gap-4 mt-2'>
              <img
                className='h-16 w-16 rounded-full'
                src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677330610/face1_wkqg0x.jpg'
                alt='face'
              />
              <div>
                <p>Matt Cannon</p>
                <p>San Diego, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
        <a href='#slide1' className='btn btn-circle'>
          ❮
        </a>
        <a href='#slide2' className='btn btn-circle'>
          ❯
        </a>
      </div>
    </div>
  );
};

export default Review;
