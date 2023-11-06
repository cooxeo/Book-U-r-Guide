import React from 'react'
import { NavLink } from 'react-router-dom';
import home from '../assets/Home Images/home.png'
import gg from '../assets/Home Images/gg.jpeg'
import hh from '../assets/Home Images/hh.jpeg'
import bb from '../assets/Home Images/bb.png'
import jjk from '../assets/jjk.png'
import {FaRegFaceGrinWink,FaWandMagicSparkles,FaFaceGrin,FaLeaf} from 'react-icons/fa6'
import {BiSearch} from 'react-icons/bi'
import { render } from 'react-dom';
import { GrStar } from "react-icons/gr";
// import Typed from 'react-typed';

export default function Home() {
    return (
        <>
    <div className='w-full bg-[#ffddf6] py-16 px-4' id='#Home'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={home} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 px-4'>Enchanting experiences, with incredible guides</h1>
          <p className='font-semibold font-sans py-2 text-xl sm:text-2xl px-4'>
          Book unique and memorable travel experience by our guides
          </p>
          
          {/* <div>
          <NavLink to="signup" className='w-full h-0 mx-auto px-4'>
          <button className='bg-orange-700 text-white hover:bg-orange-700/90 w-[200px] rounded-md font-medium my-6 mx-0 py-3 '>Book Now</button>
          </NavLink>
          </div> */}


        </div>
      </div>
    </div>
    <div className='bg-[#f9ebeb]'>
    <div className=' justify-start gap-6 items-center mx-auto max-w-[1240px] pt-8 px-8 lg:px-0'>
              <h3 className='text-3xl font-bold py-2 sm:text-4xl text-pink-700'>Go local in Charming Cities</h3>
              <p className=' text-2xl text-slate-900 font-semibold'>Find a private guided tour with one of our local guide</p>
              </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-4 xl:mx-24 mb-16'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src={gg} alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Hyderabad</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}
                        <div>
                        <NavLink to="signup">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src={hh} alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Delhi</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}
                        <div>
                        <NavLink to="place1">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src={bb} alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Jaipur</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}
                        <div>
                        <NavLink to="place2">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
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

        <div className='bg-[#e9e5ff]'>
        <div className=' justify-start gap-6 items-center mx-auto max-w-[1240px] pt-8 px-8 lg:px-0'>
              <h3 className='text-3xl font-bold py-2 sm:text-4xl text-pink-700'>Top destinations to explore</h3>
              <p className=' text-2xl text-slate-900 font-semibold'>Find a private guided tour with one of our local guide</p>
              </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-4 xl:mx-24 pb-24'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://wildlifezones.com/wp-content/uploads/2020/10/A-Beautiful-Beach-in-Goa-1024x683.jpg' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Goa</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place3">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://irfanclicks.com/wp-content/uploads/2021/01/best-place-in-ooty.jpg' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Tamil nadu</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place4">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                <div className=''>
                        <img className='object-cover h-[250px] w-full rounded-t-md' src='https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg' alt="/" />
                        <div className='p-8'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500'>things to do in <p className='font-bold text-2xl text-slate-800'>Kerala</p></h3><p className='text-sm font-semibold text-gray-600 pt-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis harum facilis molestiae ducimus voluptatum.</p>
                        <div>
                        <NavLink to="place5">
                        <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800 '>Explore tour</button>
                        </NavLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-yellow-100/40'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center text-center px-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Enchanting experiences, with incredible guides</h1>
          <p className='font-semibold font-sans py-2 text-xl'>
          Book unique and memorable travel experience by our guides
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
        <img className='w-[500px] mx-auto px-4' src={jjk} alt='/' />
      </div>
        </div>

        <div className=' justify-start gap-6 items-center mx-auto max-w-[1240px] pt-8 px-8 lg:px-0'>
              <h3 className='text-3xl font-bold py-2 sm:text-4xl text-pink-700'>Travelers love our guides</h3>
              <p className=' text-2xl text-slate-900 font-semibold'>What other guests say about our tours and guides</p>
              </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-16 xl:mx-24'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <div className='flex items-center gap-1'>
                        <p className='font-bold text-sm text-pink-800'>5.0</p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>
                        <h3 className='font-bold text-2xl my-6 text-slate-800'>A great 3 hours with a cool local</h3>
                        <p className='text-sm font-bold  text-gray-600'>"We were a large group of people and had a great tour with Sebastian, he was very accommodating and friendly, made sure we had everything and shared his knowledge with us along the way. We got to some local places that were very nice to see. Very very nice tour with a very very nice guy."</p>
                        <div className='mt-4'>
                        <div className="isolate flex -space-x-2">
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
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-sm text-pink-800'>5.0</p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>
                        <h3 className='font-bold text-2xl my-6 text-slate-800'>Great day out with Big!</h3>
                        <p className='text-sm font-bold text-gray-600'>"Our tour with Big was just fantastic. We learnt so much about Thai history, culture and food, and of course tasted some amazing dishes along the way. I would recommend a tour with Big to anyone as an introduction to Goa and Delhi!"</p>
                        <div className='mt-16'>
                        <div className="isolate flex -space-x-2">
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
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                    <div className='flex items-center gap-1'>
                        <p className='font-bold text-sm text-pink-800'>4.0</p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>
                        <h3 className='font-bold text-2xl my-6 text-slate-800'>Great experience</h3>
                        <p className='text-sm font-bold text-gray-600'>"It was one of the best decisions to book Ceren. She took me through Hyderabad, we tasted amazing food and coffee. We had such a good time together, nice chats and a lovely walk. Can recommend her 100%!!"</p>
                        <div className='mt-16'>
                        <div className="isolate flex -space-x-2">
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
                    
                </div>
                
            </div>
    </div>
    </>
    );
}
