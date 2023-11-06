import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { createRoutesFromElements } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  Router,
} from "react-router-dom";

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Host from './components/Host.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import User from './components/User.jsx';
import Overview from './pages/Overview.jsx'
import Aboutbug from './pages/Aboutbug.jsx'
import Tourconcepts from './pages/Tourconcepts.jsx'
import Platform from './pages/Platform.jsx'
import Faq from './pages/Faq.jsx'
import Single from './components/Single.jsx'
import Guides from './pages/Guides.jsx'
import Payment from './pages/Payment.jsx'
import Place1 from './pages/Place1.jsx'
import Place2 from './pages/Place2.jsx'
import Place3 from './pages/Place3.jsx'
import Place4 from './pages/Place4.jsx'
import Place5 from './pages/Place5.jsx'
import Place6 from './pages/Place6.jsx'
import Place7 from './pages/Place7.jsx'
import Place8 from './pages/Place8.jsx'

// const router = createBrowserRouter([
//   {
    
//     path: "/",
//     element: <App/>,
//     children : [
//       {
//         path: "home",
//         element: <Home/>,
//       },
//       {
//         path: "about",
//         element: <About/>,
//       },
//       {
//         path: "contact",
//         element: <Contact/>,
//       },
//       {
//         path: "user/:userid",
//         element: <User/>,
//       },
//       {
//         path: "login",
//         element: <Login/>,
//       },
//       {
//         path: "signup",
//         element: <Signup/>,
//       },
//       {
//         path: "login/signup",
//         element: <Signup/>,
//       },
//       {
//         path: "/host",
//         element: <Host/>,
//       },
//       {
//         path: "/host/home",
//         element: <Home/>,
//       },
//       {
//         path: "hide",
//         element: <Header/>,
//       },
//     ]

//   },
  
// ]);


const router = createBrowserRouter (
  createRoutesFromElements(

    <Route path='/' element={<App/>}>
      <Route path='#' element={<Home/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='/home/signup/guides/contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='/home/signup' element={<Signup/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signup/guides' element={<Guides/>}/>
      <Route path='/host/single/home/signup/guides' element={<Guides/>}/>
      <Route path='/home/signup/guides' element={<Guides/>}/>
      <Route path='/host/single/home/place1/guides' element={<Guides/>}/>
      <Route path='/host/single/home/place2/guides' element={<Guides/>}/>
      <Route path='/host/single/home/place3/guides' element={<Guides/>}/>
      <Route path='/host/single/home/place4/guides' element={<Guides/>}/>
      <Route path='/host/single/home/place5/guides' element={<Guides/>}/>
      <Route path='/home/place5/guides' element={<Guides/>}/>
      <Route path='/home/place4/guides' element={<Guides/>}/>
      <Route path='/home/place3/guides' element={<Guides/>}/>
      <Route path='/home/place2/guides' element={<Guides/>}/>
      <Route path='/home/place1/guides' element={<Guides/>}/>
      <Route path='/host/single/place6/guides' element={<Guides/>}/>
      <Route path='/host/single/place7/guides' element={<Guides/>}/>
      <Route path='/host/single/place8/guides' element={<Guides/>}/>
      <Route path='place1/guides' element={<Guides/>}/>
      <Route path='/host/single/home/signup' element={<Signup/>}/>
      <Route path='/home/place1' element={<Place1/>}/>
      <Route path='/place1' element={<Place1/>}/>
      <Route path='/host/single/home/place1' element={<Place1/>}/>
      <Route path='/home/place2' element={<Place2/>}/>
      <Route path='/host/single/home/place2' element={<Place2/>}/>
      <Route path='/place2' element={<Place2/>}/>
      <Route path='/place3' element={<Place2/>}/>
      <Route path='/place4' element={<Place2/>}/>
      <Route path='/place5' element={<Place2/>}/>
      <Route path='/place6' element={<Place2/>}/>
      <Route path='/place7' element={<Place2/>}/>
      <Route path='/home/place3' element={<Place3/>}/>
      <Route path='/host/single/home/place3' element={<Place3/>}/>
      <Route path='/host/single/home/place4' element={<Place4/>}/>
      <Route path='/home/place4' element={<Place4/>}/>
      <Route path='/host/single/home/place5' element={<Place5/>}/>
      <Route path='/home/place5' element={<Place5/>}/>
      <Route path='/host/single/place6' element={<Place6/>}/>
      <Route path='/host/single/place7' element={<Place7/>}/>
      <Route path='/host/single/place8' element={<Place8/>}/>
      <Route path='/host/single/home/signup/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/signup/guides/payments' element={<Payment/>}></Route>
      <Route path='/signup/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/place2/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/place1/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/place3/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/place4/guides/payments' element={<Payment/>}></Route>
      <Route path='/home/place5/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/home/place1/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/home/place2/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/home/place3/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/home/place4/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/home/place5/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/place6/guides' element={<Payment/>}></Route>
      <Route path='/host/single/place7/guides' element={<Payment/>}></Route>
      <Route path='/host/single/place8/guides' element={<Payment/>}></Route>
      <Route path='/host/single/place6/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/place7/guides/payments' element={<Payment/>}></Route>
      <Route path='/host/single/place8/guides/payments' element={<Payment/>}></Route>
      {/* <Route path='/host' element={<Host/>}/> */}
      <Route path='/host/single/home' element={<Home/>}/>
      <Route path='/host/single' element={<Single/>}/>
      <Route path='/host/' element={<Host/>}>
      
        {/* <Route path='single/' element={<Single/>}>
          <Route path='overview' element={<Overview/>}/>
          <Route path='aboutbookurguide' element={<Aboutbug/>}/>
          <Route path='tourconcepts' element={<Tourconcepts/>}/>
          <Route path='platform' element={<Platform/>}/>
          <Route path='faq' element={<Faq/>}/>
        </Route> */}
        {/* <Route path='overview' element={<Overview/>}/>
        <Route path='aboutbookurguide' element={<Aboutbug/>}/>
        <Route path='tourconcepts' element={<Tourconcepts/>}/>
        <Route path='platform' element={<Platform/>}/>
        <Route path='faq' element={<Faq/>}/> */}
      </Route>
    </Route>

  )
)




// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-iw081ylt1y3jml4b.us.auth0.com"
    clientId="jPSoC4hCKS937lWz9554XAkuaoTDCnfr"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <RouterProvider router={router} />
    </Auth0Provider>,
)