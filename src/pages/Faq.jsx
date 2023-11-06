// import React from 'react'

// const Faq = () => {
//   return (
//     <div className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
//         <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl '>
//             <Link to="home"><h1><h1 className='font-bold text-3xl text-gray-700 sm:mt-0 center space-x-5 mx-2 mt-4 mb-2'>Book <span className='text-orange-700'>U'r</span> Guide</h1></h1></Link>
//             <div className='hidden lg:block'>
//             <ul className='gap-4 text-sm font-bold px-2 mt-4 mb-2 flex'>
//             <li className='px-2'>
//                 <NavLink
//                 to="overview"
                
//                     className={({isActive}) =>
//                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         Overview
//                 </NavLink>                
//             </li>
//             <li className='px-2'>
//                 <NavLink
//                 to="aboutbookurguide"
//                     className={({isActive}) =>
//                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         About Book U'r Guide
//                 </NavLink>                
//             </li>
//             <li className='px-2'>
//                 <NavLink
//                 to="tourconcepts"
//                     className={({isActive}) =>
//                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         Tour concepts
//                 </NavLink>                
//             </li>
//             <li className='px-2'>
//                 <NavLink
//                 to="platform"
//                     className={({isActive}) =>
//                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         Platform
//                 </NavLink>                
//             </li>
//             <li className='px-2'>
//                 <NavLink
//                 to="faq"
//                     className={({isActive}) =>
//                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-grey-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
//                         FAQ
//                 </NavLink>                
//             </li>
//             </ul>
//             </div>
//         </div>
//         {/* <div>
//         <div className='w-full mx-auto'>
//             <img src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
//         </div> 
//         </div> */}
//     </div>
//   )
// }

// export default Faq


import React from 'react'
import faq from '../assets/faq.png'

const Faq = () => {
  return (
      <div className='w-full h-full bg-pink-100' id='faqs'>
        <section className="px-6 py-4">
      <div className="mx-auto max-w-7xl py-10">
      <img className='w-[300px] my-6' src={faq} alt="/" />
        <div className="lg:grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h1 className="text-4xl sm:2xl font-bold text-black">You can count on us - we are here to help!</h1>
          </div>
          <div className=" mt-10 lg:col-span-7 lg:mt-0">
            <dl>
              {/* {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="mt-10 first:mt-0">
                  <dt className="text-lg font-semibold leading-6 text-gray-900">
                    How do I get started?
                  </dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, et? Obcaecati,
                    nemo sit. Delectus, totam obcaecati aliquid omnis cumque ex.
                  </dd>
                </div>
              ))} */}
              <dt className="text-2xl font-bold leading-6 text-gray-900">
              What do I need to become a local host?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  To qualify to be a Book U'r Guide host, we expect you to know your city like the back of your hand and to love your city to the core. You should also have a good level of English to host international guests, and of course, enough availability to host the tours regularly.
                  </dd>
                  <dt className="text-2xl font-bold leading-6 text-gray-900 mt-10">
                  How do I receive bookings?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  As a member of the Book U'r Guide host platform, your bookings will come in directly in your account, where they can be easily accessed and managed. You’ll get an overview of any incoming requests, future bookings, as well as a list of previous tours you have hosted, all in one place.
                  </dd>
                  <dt className="text-2xl font-bold leading-6 text-gray-900 mt-10">
                  How much will I earn as a Book U'r Guide host?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  How much you earn will depend on the number of bookings you receive. This goes hand in hand with the number and type of experience you want to host and your availability. We believe in giving fair pay to all. The pricing of each experience takes into account a fair hosting fee for you and the local prices of inclusions such as food, transportation, or entrance tickets. From the total price the guest pays for an experience, Book U'r Guide takes a 32% fee before sending the payment to you.
                  </dd>
                  <dt className="text-2xl font-bold leading-6 text-gray-900 mt-10">
                  How do I receive payments?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  The moment you are accepted to be a host, you'll be asked to create a profile. There, you can let us know the best way to receive your payments (we offer bank transfer payments and in some destinations, also PayPal.)
                  </dd>
                  <dt className="text-2xl font-bold leading-6 text-gray-900 mt-10">
                  Can I add my own tours & experiences to the Book U'r Guide platform?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  Alongside our popular Book U'r Guide Originals tours, we’re opening the door for you to let your creativity shine! As a Book U'r Guide host you can design and offer your very own tours, crafted from your unique perspective and intimate knowledge of your city. By creating a personal tour, you can offer guests a one-of-a-kind experience, tailored to your expertise and passion. The best part? These tours will be showcased right on our website, ensuring that guests from around the world can discover and book your exceptional experiences. Join us in this new adventure and let’s craft unforgettable memories together!
                  </dd>
                  <dt className="text-2xl font-bold leading-6 text-gray-900 mt-10">
                  What if I can't find my city on the list?
                  </dt>
                  <dd className="mt-2 text-lg font-semibold text-gray-600">
                  We are sorry to say that if your city is not on the list, it's not in our current portfolio yet. But, keep an eye out! We are expanding fast, and who knows, your city might be next on our list! But, until then, share your email to get notified once we start recruiting hosts in your city. You can do so by choosing your city - notify me later - send your contact details.
                  </dd>

            </dl>
          </div>
        </div>
      </div>
    </section>
      </div>
  )
}

export default Faq