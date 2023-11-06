import React,{useRef, useState} from 'react'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

// // import Header from './Header';
// // import { useLocation } from 'react-router-dom'

import {FaBars ,FaXmark} from 'react-icons/fa6'

// function Host (){
//     const[Nav, Navset] = useState(false)
//     const [nav, setNav] = useState(false)
//     const [logo, setLogo] = useState(false)
//     const handleNav = ()=>{
//         setNav(!nav)
//         setLogo(!logo)
//     }

//     // const location = useLocation();

//   return (
//     <>
//         {/* {location.pathname === 'overview' ? null : <Header/>} */}
//         {/* {location.pathname === '/host/aboutbookurguide' ? null : <Header/>}
//         {location.pathname === '/host/tourconcepts' ? null : <Header/>}
//         {location.pathname === '/host/platform' ? null : <Header/>}
//         {location.pathname === '/host/faq' ? null : <Header/>} */}

//     <div className='flex w-full justify-between items-center h-20 px-8 absolute z-10 text-white '>
//         <div className='text-2xl font-bold md:text-4xl'>
//             <NavLink to='home'>
//             <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>
//                 Book <span className='text-orange-700'>U'r</span> Guide
//             </h1>
//             </NavLink>
//         </div>
//         <ul className='hidden lg:flex text-black font-semibold text-lg'>
//             <li className='p-4'>
//             {/* <NavLink
//                 to="overview"
//                 className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                     Overview
//             </NavLink>    */}
//             <a className='hover:text-orange-700' href="#overviews">Overview</a>
//             </li>
//             <li className='p-4'>
//             {/* <NavLink
//                 to="#aboutbug"
//                 className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                     About Book U'r Guide
//             </NavLink>    */}
//             <Link to="aboutbug" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 About Book U'r Guide
//             </Link>
//             </li>
//             <li className='p-4'>
//             {/* <NavLink
//                 to="tourconcepts"
//                 className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         Tour concepts
//             </NavLink>    */}
//             <Link to="concepts" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 Tour concepts
//             </Link>
//             </li>
//             <li className='p-4'>
//             {/* <NavLink
//                 to="platform"
//                 className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                     Platform
//             </NavLink>    */}
//             <Link to="platforms" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 Platform
//             </Link>
//             </li>
//             <li className='p-4'>
//             {/* <NavLink
//                 to="faq"
//                 className={({isActive}) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                     FAQ
//             </NavLink>    */}
//             <Link to="faqs" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 FAQ
//             </Link>
//             </li>
//         </ul>
//         {/* Hamburgur */}

//         <div onClick={handleNav} className='lg:hidden z-10'>

//             {nav ? <FaXmark className='mb-1' size={20}/> : <FaBars size={20} />}
//         </div>
        
//         {/* Mobile Menu */}
//         <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 h-screen backdrop-blur-md bg-white/10 duration-75 w-[400px] px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
//             <ul className='text-black'>
//                 <NavLink to='home'>
//                 <h1 className='mx-4 mb-4 -mt-2 text-2xl font-bold md:text-4xl text-white'>Book <span className='text-orange-700'>U'r</span> Guide</h1>
//                 </NavLink>
//             <li className='text-lg font-semibold p-4 border-b'>
//             <a className='hover:text-orange-700' href="#overviews">Overview</a>   
//             </li>
//             <li className='text-lg font-semibold  p-4 border-b'>
//             <Link to="aboutbug" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 About Book U'r Guide
//             </Link>   
//             </li>
//             <li className='text-lg font-semibold  p-4 border-b'>
//             <Link to="concepts" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 Tour concepts
//             </Link>   
//             </li>
//             <li className='text-lg font-semibold p-4 border-b'>
//             <Link to="platforms" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 Platform
//             </Link>   
//             </li>
//             <li className='text-lg font-semibold p-4 border-b'>
//             <Link to="faqs" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
//                 FAQ
//             </Link>   
//             </li>
//             </ul>
//         </div>
//     </div>
    
//     {/* <Outlet /> */}
//     </>
//   )
// }

// export default Host



const Host = () => {
    const [nav, setNav] = useState(false)
    const handleNav = ()=> setNav(!nav)
    const handleClose = ()=> setNav(!nav)
        
  return (
    <div className='w-screen h-[60px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
        <NavLink to='home'><h1 className='mr-2 text-2xl font-bold sm:text-3xl ml-2 '>Book <span className='text-orange-700'>U'r</span> Guide</h1></NavLink>
            <div className='flex items-center'>
                <ul className='hidden lg:flex font-semibold mr-8'>
                    <li className='p-4'>
                    <a className='hover:text-orange-700' href="#overviews">Overview</a>
                    </li>

                    <li className='p-4'>
                    <Link to="aboutbug" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                        About Book U'r Guide
                    </Link>
                    </li>

                    <li className='p-4'>
                    <Link to="concepts" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                        Tour concepts
                    </Link>
                    </li>

                    <li className='p-4'>
                    <Link to="platforms" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                        Platform
                    </Link>
                    </li>

                    <li className='p-4'>
                    <Link to="faqs" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                        FAQ
                    </Link>
                    </li>

                </ul>
            </div>

            {/* <div className='hidden lg:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4 font-semibold hover:text-orange-700'>Login</button>
                <button className='px-6 py-2 hover:bg-orange-600 rounded-md hover:text-white font-semibold'>Sign Up</button>
            </div> */}

            <div className='lg:hidden mr-2' onClick={handleNav}>
                {!nav ? <FaBars className='w-5'size={30}/> : <FaXmark className='w-5'size={30}/>}
            </div>

        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='text-lg font-semibold p-4 border-b-2 border-zinc-300'>
             <a onClick={handleClose} className='hover:text-orange-700' href="#overviews">Overview</a>   
             </li>
             <li className='text-lg font-semibold  p-4 border-zinc-300 border-b-2'>
             <Link onClick={handleClose} to="aboutbug" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                 About Book U'r Guide
             </Link>   
             </li>
             <li className='text-lg font-semibold  p-4 border-zinc-300 border-b-2'>
             <Link onClick={handleClose} to="concepts" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                 Tour concepts
             </Link>   
             </li>
             <li className='text-lg font-semibold p-4 border-zinc-300 border-b-2'>
             <Link onClick={handleClose} to="platforms" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                 Platform
             </Link>   
             </li>
             <li className='text-lg font-semibold p-4 border-zinc-300 border-b-2'>
             <Link onClick={handleClose} to="faqs" className='hover:text-orange-700 cursor-pointer' smooth={true} duration={500}>
                 FAQ
             </Link>   
             </li>
             {/* <div className='flex flex-col my-4'>
                <NavLink to='login'>
                <button className='bg-transpant text-black px-8 py-3 mb-4 border border-orange-700 font-semibold rounded-md hover:text-orange-700 '>Login</button>
                </NavLink>
                <NavLink to='signup'>
                <button className='px-8 py-3 bg-orange-700 hover:bg-orange-700 rounded-md hover:text-white font-semibold'>Sign Up</button>
                </NavLink>
             </div> */}
        </ul>
    </div>
  )
}

export default Host