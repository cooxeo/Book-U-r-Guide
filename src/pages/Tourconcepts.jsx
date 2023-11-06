import React from 'react'
import Em from '../assets/Em.png'
import Ready from '../assets/Ready.png'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";


const Tourconcepts = () => {
  return (
      <div className='bg-[#c9e3f1]  w-full flex-col flex justify-between ' id='concepts'>
        <div className='max-w-[1240px] mx-auto relative w-full'>
        <div className='px-4 py-10'>
              {/* <h2 className='text-xl sm:text-3xl pt-8 text-[#a21880] font-semibold uppercase lg:mb-8 '>This is Book U'r Guide</h2> */}
              <div><img className='mt-10 px-4 w-[500px]' src={Em} alt="/" /></div>
              <div className='flex justify-between gap-6 px-4 items-center flex-wrap md:flex-nowrap mt-8'>
              <h3 className='text-3xl font-bold py-4 sm:text-4xl'>Be part of a global community of passionate local hosts</h3>
              <p className=' text-2xl text-slate-900 font-semibold'>As a Book U'r Guide host, you instantly become part of our community. Learn from other local hosts across the globe, meet like-minded people, and get the support you need to keep improving in your career as a local host.</p>
              </div>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col  bg-[#c9e3f1] pl-4 pr-4">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[100%] max-h-[100%] lg:max-w-[80%] mx-auto "
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-4 mb-20 group relative shadow-lg text-white rounded-xl px-4 py-8 h-[290px] w-[97%] sm:w-[100%] lg:h-[380px] lg:w-[260px] xl:h-[380px] xl:w-[340px] overflow-hidden cursor-pointer md:gap-24">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px] font-bold text-xs">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    {/* <div className='max-w-[1240px] mx-auto relative w-full'>
    <div className='px-4 justify-center'>
    <div><img className='mt-8 w-[400px] mx-auto' src={Ready} alt="/" /></div>
              <div>
              <h3 className='text-3xl sm:text-4xl font-bold py-6 text-center'>Start hosting right away by joining our Book U'r Guide Originals tours!</h3>
              <p className=' py-4 text-2xl text-slate-900 text-center font-semibold '>Are you a foodie, a history lover, or an art enthusiast? Our carefully crafted Withlocals Originals tours are ready for you to spice up with your expertise & unique personality.</p>
              </div>
          </div>
    </div> */}
    </div>
  )
}

export default Tourconcepts