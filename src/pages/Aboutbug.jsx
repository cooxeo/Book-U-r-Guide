import React from 'react'
import BUGheading from '../assets/BUGheading.jpg'
import { FaSackDollar,FaCalendarCheck,FaMapLocationDot } from "react-icons/fa6";

// import { BsFill1SquareFill,BsFill2SquareFill,BsFill3SquareFill } from "react-icons/bs";

// const Aboutbug = () => {
//   return (
//       <div className='w-full flex-col flex justify-between' id='aboutbug'>
//         <div className='w-full h-screen bg-slate-300'>
//       <div className='max-w-[1240px] mx-auto relative'>
//           <div className='px-4'>
//               <img className='items-center text-sm justify-center' src={About} alt="image" />
//               <div className='flex justify-between gap-6 items-center flex-wrap md:flex-nowrap text-center'>
//               <h3 className='text-3xl font-bold py-6 sm:text-5xl'>We give you the tools to succeed as a local guide</h3>
//               <p className=' text-2xl text-slate-600 font-semibold'>Book U'r Guide is a free-to-join platform that empowers locals like you to earn money hosting private experiences that show the real side of their city away from mass commercial tourism.</p>
//               </div>
//           </div>

//           <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black '>
//               <div className='bg-white rounded-xl shadow-2xl'>
//                   <div className='p-8'>
//                       <BsFill1SquareFill className='w-16 p-4 text-white rounded-lg mt-[-4rem]' />
//                       <h3 className='font-bold text-2xl my-6 text-slate-800'>We make your dream a (paid) reality</h3>
//                       <p className='text-gray-600 text-lg font-bold'>Become a Book U'r Guide host and receive a fair payment per booking so you can make money by sharing your passion.</p>
//                   </div>
//               </div>
//               <div className='bg-white rounded-xl shadow-2xl'>
//                   <div className='p-8'>
//                       <BsFill2SquareFill className='w-16 p-4 text-white rounded-lg mt-[-4rem]' />
//                       <h3 className='font-bold text-2xl my-6 text-slate-800'>We give you the right tools</h3>
//                       <p className='text-gray-600 text-lg font-bold'>At Book U'r Guide, you get all the tools you need to manage your hosting schedule in a way that works best for you.</p>
//                   </div>
//               </div>
//               <div className='bg-white rounded-xl shadow-2xl'>
//                   <div className='p-8'>
//                       <BsFill3SquareFill className='w-16 p-4 text-white rounded-lg mt-[-4rem]' />
//                       <h3 className='font-bold text-2xl my-6 text-slate-800'>We have the experiences people love</h3>
//                       <p className='text-gray-600 text-lg font-bold'>With your expertise and passion, plus our successful Book U'r Guide Originals tours, you are set for a good start as a Book U'r Guide local host.</p>
//                   </div>
//               </div>
//           </div>

//           <div className='grid grid-cols-1 lg:grid-cols-2 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black'>
//           <div className='bg-white rounded-xl shadow-2xl'>
//                   <div className='p-8'>
//                       <BsFill1SquareFill className='w-16 p-4 text-white rounded-lg mt-[-4rem]' />
//                       <h3 className='font-bold text-2xl my-6 text-slate-800'>We help you take part in responsible tourism</h3>
//                       <p className='text-gray-600 text-lg font-bold'>Bring benefits to your community and lead tours in a way that respects the environment and those around it.</p>
//                   </div>
//               </div>
//               <div className='bg-white rounded-xl shadow-2xl'>
//                   <div className='p-8'>
//                       <BsFill2SquareFill className='w-16 p-4 text-white rounded-lg mt-[-4rem]' />
//                       <h3 className='font-bold text-2xl my-6 text-slate-800'>We want to make you shine!</h3>
//                       <p className='text-gray-600 text-lg font-bold'>To increase your opportunities and boost your career as a Withlocals host, we'll do all the marketing for you and promote our tours in major online travel agencies.</p>
//                   </div>
//               </div>
//           </div>
          
//       </div>
//   </div>
// </div>
//   )
// }

// export default Aboutbug



const Aboutbug = () => {
  return (
    <div className='w-full bg-[#d5f7e0] ' id='aboutbug'>
        {/* <div className='w-full h-[700px] bg-grey-100/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={Aboutbugbg} alt="/" />
        </div> */}
        <div className='max-w-[1240px] mx-auto text-black relative'>
            <div className='px-4 py-12'>
                {/* <h2 className='pt-8 text-slate-500 uppercase text-3xl '>This Is BUG</h2> */}
                <div><img className='mt-10 px-4 w-[500px]' src={BUGheading} alt="This Is Book U'r Guide" /></div>
                {/* <h3 className='text-5xl font-bold py-6 '>We give you the tools to succeed as a local guide</h3>
                <p className='py-4 text-3xl font-bold text-gray-800'>Book U'r Guide is a free-to-join platform that empowers locals like you to earn money hosting private experiences that show the real side of their city away from mass commercial tourism.</p> */}
                <div className='flex justify-between gap-6 items-center px-4 flex-wrap md:flex-nowrap mt-8'>
              <h3 className='text-3xl font-bold py-4 sm:text-4xl'>We give you the tools to succeed as a local guide</h3>
              <p className=' text-2xl text-slate-900 font-semibold'>Book U'r Guide is a free-to-join platform that empowers locals like you to earn money hosting private experiences that show the real side of their city away from mass commercial tourism.</p>
              </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-8 pt-12 sm:pt-20 text-black py-16'>
                <div className=' rounded-xl shadow-2xl bg-white'>
                    <div className='p-8'>
                    <FaSackDollar className='justify-center items-center w-full text-green-600' size={90}/>
                        <h3 className='font-bold text-2xl my-6 text-green-600'>We make your dream a (paid) reality</h3>
                        <p className='text-lg font-semibold text-gray-600'>Become a Book U'r Guide host and receive a fair payment per booking so you can make money by sharing your passion.</p>
                    </div>
                </div>
                <div className=' rounded-xl shadow-2xl bg-white'>
                    <div className='p-8'>
                    <FaCalendarCheck className='justify-center items-center w-full text-green-600' size={90}/>
                        <h3 className='font-bold text-2xl my-6 text-green-600'>We give you the right tools</h3>
                        <p className='text-lg font-semibold text-gray-600'>At Book U'r Guide, you get all the tools you need to manage your hosting schedule in a way that works best for you.</p>
                    </div>
                </div>
                <div className=' rounded-xl shadow-2xl bg-white'>
                    <div className='p-8'>
                    <FaMapLocationDot className='justify-center items-center w-full text-green-600' size={90}/>
                        <h3 className='font-bold text-2xl my-6 text-green-600'>We help you take part in responsible tourism</h3>
                        <p className='text-lg font-semibold text-gray-600'>With your expertise and passion, plus our successful Book U'r Guide Originals tours, you are set for a good start as a Book U'r Guide local host.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutbug