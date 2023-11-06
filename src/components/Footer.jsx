import React from 'react'
import {FaFacebook,FaGithub,FaTelegram,FaReddit,FaRegFaceGrinWink,FaAngleUp} from 'react-icons/fa6'
import { Link } from 'react-scroll';


export default function Footer() {
    return (
        <footer className="bg-[#1c2424] border-y border-[#1c2424]">
            <div>
                <div className='flex flex-wrap justify-between mx-auto max-w-screen-xl mt-8 px-4 items-center'>
                <h1 className='font-bold text-3xl text-gray-100 sm:mt-0 center space-x-5 mx-2'>Book <span className='text-orange-700'>U'r</span> Guide</h1>
                <div>
                    <ul className='flex gap-2 text-gray-200 mt-4 mb-4 mx-2'>
                        <li><a href="#"><FaFacebook size={30}/></a></li>
                        <li><a href="#"><FaGithub size={30}/></a></li>
                        <li><a href="#"><FaTelegram size={30}/></a></li>
                        <li><a href="#"><FaReddit size={30}/></a></li>
                    </ul>
                </div>
                </div  >
                <div className='mx-auto max-w-screen-xl h-[0.5px] border-b-[0.5px] rounded-s-full border-gray-700 mt-4'></div>
                <div className='flex flex-wrap justify-between mx-auto max-w-screen-xl mt-8 px-4 mb-16'>
                    <div className='flex flex-col m-4'>
                    <h1 className='text-xl font-bold text-gray-400'>Download Now</h1>
                    <ul className='text-gray-400 mb-2 mt-2 text-sm'>
                        <li className='py-1'>App Store</li>
                        <li className='py-1'>Google Play</li>
                    </ul>
                    </div>
                    <div className='flex flex-col m-4'>
                    <h2 className='text-xl font-bold text-gray-400'>Support</h2>
                    <ul className='text-gray-400 mb-2 mt-2 text-sm'>
                        <li className='py-1'>Help Center for guests</li>
                        <li className='py-1'>Help Center for hosts</li>
                        <li className='py-1'>Privacy Policy</li>
                        <li className='py-1'>Terms & Conditions</li>
                        <li className='py-1'>Cancelation policy for guests</li>
                        <li className='py-1'>Cancelation policy for hosts</li>
                    </ul>
                    </div>
                    <div className='flex flex-col m-4'>
                    <h3 className='text-xl font-bold text-gray-400'>How To Partner</h3>
                    <ul className='text-gray-400 mb-2 mt-2 text-sm'>
                        <li className='py-1'>Become a partner</li>
                    </ul>
                    </div>
                    <div className='flex flex-col m-4'>
                    <h4 className='text-xl font-bold text-gray-400'>About Book U'r Guide</h4>
                    <ul className='text-gray-400 mb-2 mt-2 text-sm'>
                        <li className='py-1'>Our story</li>
                        <li className='py-1'>Press</li>
                        <li className='py-1'>Jobs</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Sustainability</li>
                    </ul>
                    </div>
                </div>

                <div className='justify-end flex mx-auto max-w-screen-xl px-8'>
                    
                    <ul>
                    <li>
                    <a href='#'><FaAngleUp size={20} className='text-white bg-orange-700 w-10 h-10 rounded-full p-2 cursor-pointer'/></a>
                    </li>
                    </ul>

                </div>

                <div className='mx-auto max-w-screen-xl h-[0.5px] border-b-[0.5px] rounded-s-full border-gray-700 mt-4'></div>
                <div className='flex flex-wrap justify-between mx-auto max-w-screen-xl mt-8 px-4 mb-14'>
                    <h1 className='text-gray-500 text-sm mx-2 mt-2'>© 2023 | Book u'r Guide | Privacy | Cookies</h1>
                    <h2 className='text-gray-500 text-lg font-sans font-bold flex items-center gap-2 mx-2 mt-2'><FaRegFaceGrinWink size={20}/>Enjoy a city like a local</h2>
                </div>
            </div>    
        </footer>
    );
}
