import React from 'react'
import gg from '../assets/Home Images/gg.jpeg'
import { GrStar } from "react-icons/gr";
import { NavLink } from 'react-router-dom';


const Guides = () => {
  return (
    <div className='bg-gray-100'>
      <h1 className='text-gray-700 text-2xl pt-8 font-bold text-center'>Pick your favourite local</h1>
      <div className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-4 xl:mx-24 pb-16'>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/smokhfs2uevnppc2bmwl' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://nextjs.org/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F35255%2F1665059775-delba.jpg&w=640&q=75' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                <div className='bg-white rounded-xl shadow-2xl h-[450px]'>
                    <div className=''>
                        <img className='object-cover h-[150px] w-[150px] rounded-full mx-auto mt-2' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' alt="/" />
                        <div className='p-4'>
                        <h3 className='font-bold text-[16px] text-slate-800 uppercase border-b-2 border-gray-500 text-center'>Ronaldo <p className='font-semibold text-sm text-slate-800 py-1 text-center'>About Me</p></h3><p className='text-xs font-semibold text-gray-600 pt-2'>Traveller ✈️ Rower 🚣‍♀️ Guide ❤️ Engineer ... I love FOOD Too I do tours with passion and lots of excitement ... You will experience and discover, with me. I am doing my Master of Arts (M.A) degree in History. I was lucky to have travelled to 110+ Countries and I continue to do more!</p>
                        {/* <button className='font-bold text-lg bg-orange-700 rounded-full px-4 py-2 mt-6 text-white hover:bg-orange-800'>Explore tours</button> */}


                        <div className='flex items-center gap-1 py-4'>
                        <p className='font-bold text-sm text-pink-800'><span className='text-sm text-gray-700 font-semibold'>13</span> Reviews </p>
                            <ul className='flex text-pink-700'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>



                        <div className='flex justify-between text-[15px]'>
                        
                        <NavLink to='payments'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Pick me</button>
                        </NavLink>
                        <div className='px-2'>
                        <NavLink to='/contact' type='button'>
                        <button className='font-semibold bg-orange-700 rounded-full px-4 py-2  text-white hover:bg-orange-800 '>Contact me</button>
                        </NavLink>
                        </div>
                        
                        </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
    </div>
  )
}

export default Guides