import React from 'react'
import tourguide from '../assets/tourguide.jpg'
import {FaRegCheckCircle} from "react-icons/fa";

const feature = [
    {
      name: 'Welcome to the Book U`r Guide Help Center 👋',
      description:
        'Our help center is divided in two sections. One for hosts and one for guests, in order to find the answers to your question please select the relevant section below.',
      
    },
    // {
    //   name: 'A tour category for every interest',
    //   description: 'From food and history tours to day trips, there`s a tour that fits your interests & knowledge - pick the one(s) that fits you best!',
    //   icon: FaRegCheckCircle,
    // },
    // {
    //   name: 'Guaranteed bookings',
    //   description: 'Our Book U`r Guide Originals Tours are proven tour concepts designed based on years of collecting traveler’s insights and proven records of guests’satisfaction',
    //   icon: FaRegCheckCircle,
    // },
  ]

export default function About() {
    return (
        <div className="overflow-hidden py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {feature.map((feature) => (
                  <div key={feature.name} className="relative px-4">
                    <dt className="inline font-bold sm:text-2xl text-xl text-pink-700">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-semibold">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className='mx-auto max-w-7xl lg:px-4 sm:flex flex-wrap mt-8 text-center sm:justify-between py-4'>
            <button className='border-2 border-pink-700 h-14 rounded-full px-4 text-pink-700 font-bold hover:bg-pink-800 hover:text-white'>Booking and travelling</button>
            <button className='border-2 border-pink-700 h-14 rounded-full px-4 mt-4 sm:mt-0 text-pink-700 font-bold hover:bg-pink-800 hover:text-white'>Hosting experinces</button>
            </div>
            </div>
          </div>
          <img
            src={tourguide}
            alt="Product screenshot"
            className="w-[36rem] max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
    );
}