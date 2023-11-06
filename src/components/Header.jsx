import React,{useRef, useState} from 'react'
// import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import {FaBars ,FaXmark} from 'react-icons/fa6'
import { useAuth0 } from "@auth0/auth0-react";
import tt from '../assets/tt.jpg'


export default function Header() {

    const [nav, setNav] = useState(false)
    const handleNav = ()=> setNav(!nav)
    const handleClose = ()=> setNav(!nav)
    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/home" className="flex items-center">
                        <h1 className='mr-3 font-bold text-2xl md:text-3xl'>Book <span className='text-orange-700'>U'r</span> Guide</h1>
                    </Link>
                    <div className=" items-center lg:order-2 hidden lg:flex">
                        {/* <Link
                            to="login"
                            // className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        ><button onClick={() => loginWithRedirect()}>Log In</button>
                        </Link> */}
                        
                        
                            <div className='flex'>
                            {isAuthenticated &&  <li className='px-4 text-center flex items-center gap-2 '><>{user.name}<img className='rounded-full w-10' src={user.picture}/></></li>}
                            </div>
                        {
                            isAuthenticated ? <button className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                            </button> : <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" onClick={() => loginWithRedirect()}>Log In</button>
                        }
                    </div>

                        <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2">
                            

                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }smooth={true} duration={500}
                                >
                                    Home
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Help
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink
                                to="/host/single"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Become a host
                                </NavLink>
                                
                            </li>
                                
                        </ul>

                    </div>
                
                    <div >
                    <ul className={!nav ? 'hidden' : 'absolute w-full mt-5 text-lg font-semibold p-4 border-b-2 border-zinc-300 left-0 bg-gray-200'}>
                    <li>
                                <NavLink onClick={handleClose}
                                to="/home"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                                
                            </li>
                            
                            <li>
                                <NavLink onClick={handleClose}
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink onClick={handleClose}
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Help
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink onClick={handleClose}
                                to="/host/single"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Become a host
                                </NavLink>
                                
                                
                            </li>
             <div className='flex flex-col my-4'>
                {/* <Link className='bg-transpant text-black font-bold px-8 py-3 mb-4 border border-orange-700 rounded-md hover:text-orange-700 text-center' to='login'>
                <button onClick={handleClose}>Login</button>
                </Link>
                <Link className='px-8 py-3 bg-orange-700 hover:bg-orange-800 rounded-md text-white font-bold text-center' to='signup'>
                <button onClick={handleClose}>Sign Up</button>
                </Link> */}
                <div className='flex mx-auto py-4 border-b-2'>
                            {isAuthenticated &&  <li className='px-4 text-center flex items-center gap-2 '><>{user.name}<img className='rounded-full w-10' src={user.picture}/></></li>}
                            </div>
                {
                            isAuthenticated ? <button className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-4 lg:py-2.5 mr-2 focus:outline-none' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                            </button> : <button className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none" onClick={() => loginWithRedirect()}>Log In</button>
                        }
             </div>
            </ul>
                    </div>
        <div className='lg:hidden mr-2' onClick={handleNav}>
                        {!nav ? <FaBars className='w-5' size={30}/> : <FaXmark className='w-5'size={30}/>}
                    </div>
            </div>
            </nav>
        </header>
    );
}