import { Link, NavLink } from 'react-router-dom';
import {BiSearch} from 'react-icons/bi'
import home from '../assets/Home Images/home.png'
import bookings from '../assets/bookings.jpg'
import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { FaArrowRight } from "react-icons/fa6";
import { GrStar } from "react-icons/gr";
import { BsGlobe2,BsCheck2Circle } from "react-icons/bs";
import {FaRegFaceGrinWink,FaWandMagicSparkles,FaFaceGrin,FaLeaf} from 'react-icons/fa6'

const Place5 = () => {
    const [date, setDate] = useState();
    const[amount, setAmount] = useState(1)
    const handleDonation=(value)=>{
      if(value <1){
        setAmount(1);
      }else if (value >50){
        setAmount(1000);
      }else{
        setAmount(value)
      }
  
    }
    console.log('Date',date)
    const slides = [
      {
        url: 'https://blog.thomascook.in/wp-content/uploads/2020/08/humayun-tomb-delhi-banner.jpg',
      },
      {
        url: 'https://himalayanrider.com/wp-content/uploads/2022/02/delhi-784x500-1.jpg',
      },
      {
        url: 'https://www.momjunction.com/wp-content/uploads/2015/12/It-was-built-in-1193-by-Qutub-ud-din-Aibak-.jpg',
      },
  
      {
        url: 'https://shpl.b-cdn.net/wp-content/uploads/2017/11/D.-Humayun-Tomb.jpg',
      },
      {
        url: 'https://www.travelwithcg.com/wp-content/uploads/2022/08/Taj-Mahal-grounds-1024x683.jpg',
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    return (
      <div className='bg-slate-100'>
      <div>
        <div className='w-[90%] h-[100%] px-4 items-center mx-auto '>
        {/* <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-full mx-auto my-4' src={bookings} alt='/' />
          <div className='flex flex-col justify-center'>
  
            <div>
            <div className='flex flex-col justify-center text-center px-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Choose your destination</h1>
            <p className='font-semibold font-sans py-2 text-xl'>
            Book unique and memorable travel experience guided by locals
            </p>
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
        </div> */}
  
  
  <div className='w-[100%] h-10 mx-auto'>
        <h1 className='font-bold text-2xl sm:text-4xl px-6 pt-10 mt-0'>Explore Kerala :  <span className='text-pink-700'>Things to do in kerala</span></h1>
        </div>
      <div className='flex flex-wrap sm:flex-nowrap'>
      <div className='max-w-[900px] h-[580px] w-full py-16 mx-auto px-4 relative group '>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full rounded-lg bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
            
          ))}
        </div>
            
      </div>
      
      <div className="w-[400px] h-[460px] rounded shadow-2xl py-4 p-2 mt-14 md:mr-8 mx-auto">
        <div className='text-center'>
          <h1 className='text-center'><span className='font-semibold text-orange-700'>500/- </span>Per Person</h1>
          <h2>kids Free</h2>
          <div className='flex items-center gap-1 justify-center py-2'>
                          <p className='font-bold text-sm text-orange-700 text-center '><span className='text-sm text-gray-500'>13</span> Reviews</p>
                              <ul className='flex text-pink-700 text-center'>
                                  <li><GrStar/></li>
                                  <li><GrStar/></li>
                                  <li><GrStar/></li>
                                  <li><GrStar/></li>
                                  <li><GrStar/></li>
                              </ul>
                          </div>
        </div>
        <div className='px-4 py-2'>
        <input className=' px-2 rounded-md h-[30px] py-2 justify-start border-orange-700 border-2 w-full' type="text" placeholder='Enter Your Name'/>
        </div>
      <div className='text-center px-4'>
      <input className='px-2 h-[30px] rounded-md justify-start  border-orange-700 border-2 w-full' type="date" onChange={e=>setDate(e.target.value)} size={40}/>
      <div className='py-2'>
        <div className='sm:flex justify-between items-center flex-col-2 border-2 border-pink-700 rounded-md'>
        <p className='font-semibold pt-1 w-full text-start text-pink-700 px-2 h-[30px]'>No.of Adults</p>
      <input className=' py-2 px-2 h-[30px] w-full mx-auto focus:outline-none rounded-md bg-transparent text-center' type="numbers" placeholder='No of Adults' value={amount}onChange={(e)=>handleDonation(Number(e.target.value))} />
        </div>
      <div className="isolate flex -space-x-2 pt-4 px-4">
          <img
            className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          <img
            className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
            alt="Guillermo_Rauch"
          />
          <img
            className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://leerob.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.b1d1472f.jpg&w=256&q=75"
            alt="Lee_Robinson"
          />
          <img
            className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
            alt="Delba"
          />
        </div>
      </div>
      </div>
        <div className="px-8">
          <p className=" text-lg text-pink-700 font-semibold">
            Pick one of the guide available on this tour.
          </p>
          
          <div className='py-2'>
          <NavLink to='guides'><button
            type="button"
            className="mt-1 w-full bg-orange-700 px-2 py-4 rounded-full text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Select Now
          </button>
          </NavLink>
          
          </div>
        </div>
      </div>
      </div>
      <div className='mt-4'>
      <h1 className='font-semibold px-4'>This private tour can be <span className='text-pink-700'>100%</span> personalized for you</h1>
        <div className='sm:flex flex-wrap items-center gap-2'>
        <div className="isolate flex -space-x-8 pt-4 px-4 pb-4">
          <img
            className="relative z-20 inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
            alt="Dan_Abromov"
          />
          <img
            className="relative z-20 inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl"
            alt="Guillermo_Rauch"
          />
          <img
            className="relative z-20 inline-block h-20 w-20 rounded-full ring-2 ring-white"
            src="https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75"
            alt="Delba"
          />
        </div>
        <div>
        <h1>Pick one of the guide available on this tour</h1>
        <div className='flex items-center gap-2 mt-2'>
        <div><BsGlobe2 size={20} /></div> <p className='sm:flex flex-wrap gap-1'><span className='font-bold'>Available languages: </span>    English, Hindi And Local Language of that palce.</p>
        </div>
        </div>
        </div>
      </div>
        <div>
          <h1 className='font-bold text-xl text-pink-700 mt-4'>7 reasons to book this tour</h1>
          <div className='sm:flex gap-6 justify-between flex-wrap'>
          <div className='py-4'>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
            <div><BsCheck2Circle size={20} className='text-green-500'/></div>
          Can be 100% customized to your food wishes
          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          Try classic Mango stickey Rice & Pad Thai at real local hotspots
          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          Stop to see highlights of the city along the way
          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          Local safety regulations are put in place to ensure your comfort
          </div>
          </div>
          <div className=''>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          Taste the best of the Thai cuisine
          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          10 local tastings
          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>          It’s not just food; it’s local culture
          </div>
          </div>
          </div>
        </div>
        
      </div>
  
      <div className='bg-pink-800'>
            <div className=''>
            <div className=''>
            <h2 className='text-xl flex sm:text-xl font-semibold pt-8 items-center justify-center gap-2 text-white '>< FaRegFaceGrinWink size={20}/>Book U'r Guide</h2>
              <h3 className='text-xl sm:text-2xl font-bold text-center pt-2 text-white px-4'>Why you should book in Book U'r Guide</h3>
              </div>
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-4 xl:mx-24'>
        <div className=''>
                <div className=''>
                        <div className='p-2'>
                        <FaWandMagicSparkles size={40} className='flex justify-center w-full mx-auto h-20 pb-8 text-yellow-100/90'/> 
                        <h3 className='font-bold text-xl text-yellow-500  border-gray-500 text-center'>100% Customizable </h3><p className='text-md font-semibold text-white pt-2 text-center'>Let your local host tailor the tour completely to your wishes.</p>
                        
                        </div>
                    </div>
                    
        </div>
        <div className=''>
        <div className=''>
                        <div className='p-2'>
                        <FaFaceGrin size={40} className='flex justify-center w-full mx-auto h-20 pb-8 text-yellow-100/90'/> 
                        <h3 className='font-bold text-xl text-yellow-500  border-gray-500 text-center'>Private guided tours </h3><p className='text-md font-semibold text-white pt-2 text-center'>No strangers on your tour. It's just you and your local host.</p>
                        
                        </div>
                    </div>
                    
        </div>
        <div className=''>
        <div className=''>
                        <div className='p-2'>
                        <FaLeaf size={40} className='flex justify-center w-full mx-auto h-20 pb-8 text-yellow-100/90'/> 
                        <h3 className='font-bold text-xl text-yellow-500  border-gray-500 text-center'>Responsible </h3><p className='text-md font-semibold text-white pt-2 text-center'>Our tours are designed with people, places & the planet in mind</p>
                        
                        </div>
                    </div>
                    
        </div>
        </div>
        
        </div> 
      
      </div>
      </div>
    )
}

export default Place5