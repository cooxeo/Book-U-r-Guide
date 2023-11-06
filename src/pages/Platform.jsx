import React from 'react'
import platform from '../assets/platform.png'
import { Link, NavLink } from 'react-router-dom';
import { BsFillClipboard2CheckFill,BsPeople,BsPersonSquare,BsBullseye } from "react-icons/bs";
import { FaWandMagicSparkles,FaHandshakeAngle } from "react-icons/fa6";
import {FaRegCheckCircle} from "react-icons/fa";
import {BiSearch} from 'react-icons/bi'
import gg from '../assets/Home Images/gg.jpeg'
import hh from '../assets/Home Images/hh.jpeg'
import bb from '../assets/Home Images/bb.png'
import rrr from '../assets/rrr.png'
import Ready from '../assets/Ready.png'
import tourguide from '../assets/tourguide.jpg'

const features = [
    {
      name: 'Be in charge of your own schedule',
      description:
        'Choose when you are available to host with an easy to use host agenda',
      icon: BsFillClipboard2CheckFill,
    },
    {
      name: 'More opportunities from partner platforms',
      description:
        'As a Book U`r Guide host, you`ll also be promoted on & get bookings from major online travel agencies',
      icon: BsPeople,
    },
    {
      name: 'Grow your skills along the way',
      description:
        'Access learning content created together with our most experienced hosts',
      icon: FaWandMagicSparkles,
    },
    {
      name: 'A proactive community',
      description:
        'Be part of a growing community of hosts from around the world and connect over social media groups, virtual events or in person',
      icon: FaHandshakeAngle,
    },
    {
        name: 'Adopt responsible tourism practices',
        description:
          'Work alongside UN development goals towards a brighter future in tourism with people and planet in mind.',
        icon: BsBullseye,
      },
      {
        name: 'Your brand and online presence',
        description:
          'You are in control of your host profile and can edit it whenever you like to reflect who you truly are!',
        icon: BsPersonSquare,
      },
  ]
  const feature = [
    {
      name: 'For hosts of all experience levels',
      description:
        'Whether you are an expert in the field or starting your career as a local guide - the Book U`r Guide Originals Tours are fit for rookies as well as professional guides!',
      icon: FaRegCheckCircle,
    },
    {
      name: 'A tour category for every interest',
      description: 'From food and history tours to day trips, there`s a tour that fits your interests & knowledge - pick the one(s) that fits you best!',
      icon: FaRegCheckCircle,
    },
    {
      name: 'Guaranteed bookings',
      description: 'Our Book U`r Guide Originals Tours are proven tour concepts designed based on years of collecting traveler’s insights and proven records of guests’satisfaction',
      icon: FaRegCheckCircle,
    },
  ]
  
const Platform = () => {
  return (
      <div className='w-full h-full object-cover bg-blue-200/50' id='platforms'>
        <div className='max-w-[1240px] mx-auto relative w-full'>
    <div className='px-4 pt-24 justify-center'>
    <div><img className='w-[400px] mx-auto' src={Ready} alt="/" /></div>
              <div className=''>
              <h3 className='text-3xl sm:text-4xl font-bold py-6 text-center'>Start hosting right away by joining our Book U'r Guide Originals tours!</h3>
              <p className=' text-2xl text-slate-900 text-center font-semibold py-2 '>Are you a foodie, a history lover, or an art enthusiast? Our carefully crafted Book U'r Guide Originals tours are ready for you to spice up with your expertise & unique personality.</p>
              </div>
          </div>
    </div>

    <div className="overflow-hidden py-4 sm:py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {feature.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold sm:text-2xl text-xl text-blue-500">
                      <feature.icon className="absolute left-1 top-1 h-6 w-6 text-blue-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-semibold">{feature.description}</dd>
                  </div>
                ))}
              </dl>
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

        <div className=' justify-start gap-6 items-center mx-auto max-w-[1240px] pt-8 px-8 lg:px-0'>
              <h3 className='text-2xl font-bold py-2 sm:text-2xl text-black'>Some Of Our Most Loved Tours <span className='text-blue-500/80'>In India</span></h3>
              </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 sm:pt-10 text-black xl:mx-24 mb-16'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://www.holidaymonk.com/wp-content/uploads/2022/06/Golden-Temple-Amritsar-Punjab.webp' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Punjab</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place6">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://www.gujaratpackage.com/wp-content/uploads/2022/03/gujarat-tour-packages.jpg' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Gujarat</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place7">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://www.tourmyindia.com/blog//wp-content/uploads/2021/08/Best-Places-to-Visit-in-Mumbai.jpg' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Mumbai</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place8">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-100 py-16 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-2xl sm:text-4xl font-bold py-2 leading-7 text-indigo-500">One Step Solution</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          One platform to rule it all
          </p>
          <p className="mt-6 font-semibold text-lg leading-8 text-gray-600">
          Manage your earnings, schedule, and receive bookings from the biggest tour providers - all on the Book U'r Guide host platform
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-xl font-semibold leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    <div>
    <div className='flex flex-col justify-center text-center'>
    <img className=' h-96 object-cover px-0 ' src={rrr} alt="/" />
        <div className='absolute w-full h-96 py-24 px-4 bg-black/70'>
        <h3 className='font-bold py-2 text-2xl text-white'>Join For Free</h3>
          <h1 className='md:text-6xl sm:text-3xl text-2xl font-bold py-2 text-white'>Select your city & apply now</h1>
          <div className='py-4'>
          <form className='flex max-w-[400px] w-full mx-auto justify-between items-center px-2 py-1 border rounded-md bg-white shadow-lg'>
        <div className='border-none items-center'>
          <input className='border-none text-black bg-transparent w-[200px] focus:outline-none' type="text" placeholder='Choose your city' />
        </div>
        <div className='text-gray-600'>
          <BiSearch size={30}/>
        </div>
      </form>
          </div>
        </div>
        </div>
    </div>
      </div>
  )
}

export default Platform