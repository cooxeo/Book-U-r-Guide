import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
// import { Home, ChevronRight, ShoppingCart } from 'lucide-react'
import pay from '../assets/pay.png'


const Payment = ({ values, touched, errors, handleBlur, handleChange }) => {
    const steps = ['Personal Information', 'Payment Method', 'Confirmation']
    const onToken = (token) => {
        console.log(token);
    };
    return (
      <div className='md:flex bg-blue-300 items-center' id='payments'>
        <img className='w-full h-full mx-auto ' src={pay} alt="/" />
        <div className="mx-auto w-full max-w-7xl h-[500px] md:mt-4 px-4">
      <div className="mx-auto my-4 max-w-2xl ">
        {/* breadcrumb */}
        
        {/* Form */}
        <div className="overflow-hidden rounded-xl bg-white p-4 shadow">
          
          <p className="text-sm font-bold text-gray-900">Personal Info</p>
          <div className="mt-6 gap-6 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your first name"
                id="firstName"
              ></input>
            </div>

            <div className="w-full">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Enter your last name"
                id="lastName"
              ></input>
            </div>
            <div className="col-span-2 grid">
              <div className="w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                ></input>
              </div>
              <div className="w-full py-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Address of your hotel
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Address"
                  id="email"
                ></input>
              </div>
              <div className="w-full py-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Contact No
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Telephone Number"
                  id="email"
                ></input>
              </div>
            </div>

            <div className="col-span-2 grid">
            <div className=' justify-between mx-auto'>
        <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51O8nkFSFqpR6FFI75tB5WTHzqvhYK8BEO54IGKnMUnjbLI4eOMsrb288f2d5g4FqaemYJHxIKIIp3Nu2QyCX6ZlB00nxUIztgo"
      />
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    );
  };
  
  export default Payment;