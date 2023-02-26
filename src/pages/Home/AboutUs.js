import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const AboutUs = () => {
  return (
    <div className='bg-info relative px-24 py-28'>
      <div className='bg-base-100 lg:h-2/5 lg:w-[30vw] lg:block md:hidden absolute rounded-3xl bottom-0 z-20 left-64 py-10 px-10'>
        <h2 className='text-xl font-bold'>Come and visit us</h2>
        <div className='mt-4'>
          <div className='flex flex-row gap-4 my-4'>
            <CiLocationOn className='h-8 w-16 text-primary' />
            <p className='text-lg'>
              837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
            </p>
          </div>
          <div className='flex flex-row gap-4 my-4'>
            <BsTelephone className='h-8 w-8 text-primary' />
            <p className='text-lg'>(414) 857 - 0107</p>
          </div>
          <div className='flex flex-row gap-4'>
            <HiOutlineMail className='h-8 w-8 text-primary' />
            <p className='text-lg'>losangeles@restaurantex.com</p>
          </div>
        </div>
      </div>
      <div className='flex items-center lg:flex-row md:flex-col gap-32 '>
        <img
          src='https://res.cloudinary.com/dzowf0ojq/image/upload/v1677325551/about-home-restaurante-x-template-p-1080_c32pzn.jpg'
          className='max-w-lg rounded-3xl shadow-2xl'
          alt='about home'
        />
        <div>
          <h1 className='text-3xl font-bold'>About Us</h1>
          <p className='py-6 text-lg'>
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <p className='text-lg'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis laborum, blanditiis, qui repellat rem earum, voluptate
            eligendi incidunt iusto et culpa temporibus voluptates! Fugit
            suscipit assumenda quasi labore saepe magnam!
          </p>
          <div className='flex gap-6 mt-8'>
            <button className='btn bg-base-100 border border-accent rounded-3xl text-lg'>
              About Us
            </button>
            <button className='btn btn-primary rounded-3xl text-base-100 text-lg'>
              Join our team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
