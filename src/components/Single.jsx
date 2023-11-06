import React from 'react'
import Overview from '../pages/Overview'
import Aboutbug from '../pages/Aboutbug'
import Tourconcepts from '../pages/Tourconcepts'
import Platform from '../pages/Platform'
import Faq from '../pages/Faq'
import { Outlet } from 'react-router-dom'
import Host from './Host'

const Single = () => {
  return (
    <>
    <Host/>
    <Overview/>
    <Aboutbug/>
    <Tourconcepts/>
    <Platform/>
    <Faq/>
    <Outlet/>
    </>
  )
}

export default Single