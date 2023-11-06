import React from 'react'
import baground from '../assets/baground.jpg'
import {BiSearch} from 'react-icons/bi'


const Overview = () => {

  return (
    <>
    <div className='w-full h-screen relative' id='overviews'>
      <img className='w-full h-full object-cover' src={baground} alt="img" />
    </div>
    <div className='absolute w-full h-full top-0 left-0'></div>
    <div className='absolute top-0 w-full h-96 flex flex-col justify-center text-center text-white p-4'>
      <h1 className='font-bold lg:text-6xl md:text-5xl mt-14 text-4xl'>Become a <span className='text-gray-300'>Book <span className='text-orange-700'>U'r</span> Guide</span> Host</h1>
      <h2 className='font-bold lg:text-3xl md:text-2xl m-8 text-gray-900 text-lg'>Earn by sharing your passion for your city with travelers</h2>
      <form className='flex max-w-[400px] w-full mx-auto justify-between items-center px-2 py-1 border rounded-md bg-white shadow-lg'>
        <div className='border-none items-center'>
          <input className='border-none text-black bg-transparent w-[200px] focus:outline-none' type="text" placeholder='Choose your city' />
        </div>
        <div className='text-gray-600'>
          <BiSearch size={30}/>
        </div>
      </form>
    </div>
    </>
  )
}

export default Overview