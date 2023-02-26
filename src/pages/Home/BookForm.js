import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';

const BookForm = () => {
  return (
    <div className='relative flex lg:flex-row'>
      <div className='bg-base-100 lg:block md:hidden w-1/3 h-fit absolute pt-10 pl-12 top-12 right-60 rounded-3xl border border-neutral-700'>
        <form>
          <div className='flex flex-row gap-6'>
            <div className='mb-6'>
              <label
                htmlFor='name'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3'
                placeholder='John Carter'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3'
                placeholder='name@flowbite.com'
                required
              />
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='mb-6'>
              <label
                htmlFor='phone'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3'
                placeholder='(414) 857 - 0107'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='location'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Location
              </label>
              <input
                type='text'
                id='location'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full p-3'
                placeholder='Ex. Los Angeles'
                required
              />
            </div>
          </div>
          <div className='flex flex-row gap-6'>
            <div className='mb-6'>
              <label
                htmlFor='date'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Date
              </label>
              <input
                type='date'
                id='date'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full py-3 px-8'
                required
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='schedule'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Schedule
              </label>
              <input
                type='time'
                id='schedule'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full  block w-full py-3 px-11'
                required
              />
            </div>
          </div>
          <label
            htmlFor='message'
            className='block mb-2 text-sm font-medium text-gray-900'
          >
            Add a note
          </label>
          <textarea
            id='message'
            rows='4'
            className='block p-4 w-96 text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 '
            placeholder='Do you have any note for us?'
          ></textarea>
          <button
            type='submit'
            className='text-white bg-primary  focus:outline-none font-medium rounded-full text-lg px-8 py-3 my-5 text-center'
          >
            Book a table
          </button>
        </form>
      </div>
      <div className='flex items-center'>
        <div className='px-28 w-3/4 ml-16'>
          <h1 className='text-4xl font-bold '>Book your table now</h1>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum.
          </p>
          <div className='mt-4 w-3/5'>
            <div className='flex flex-row gap-4 my-4'>
              <CiLocationOn className='h-8 w-12 text-primary' />
              <p className='text-lg'>
                837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
              </p>
            </div>
            <div className='flex flex-row gap-4 my-4'>
              <BsTelephone className='h-8 w-6 text-primary' />
              <p className='text-lg'>(414) 857 - 0107</p>
            </div>
            <div className='flex flex-row gap-4'>
              <HiOutlineMail className='h-8 w-6 text-primary' />
              <p className='text-lg'>losangeles@restaurantex.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary h-screen w-2/5'></div>
    </div>
  );
};

export default BookForm;
